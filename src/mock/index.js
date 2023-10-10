import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUsers, Logs } from './log';
import { Projects } from './project';
import { homeInfo } from './home';

import Mock from 'mockjs';
let _Logs = Logs;
let _Project = Projects
export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    //登录
    mock.onPost('/login').reply(config => {
      let { username, password } = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
          let hasUser = LoginUsers.some(u => {
            if (u.username === username && u.password === password) {
              user = JSON.parse(JSON.stringify(u));
              user.password = undefined;
              return true;
            }
          });

          if (hasUser) {
            resolve([200, { code: 200, msg: '请求成功', user }]);
          } else {
            resolve([200, { code: 500, msg: '账号或密码错误' }]);
          }
        }, 500);
      });
    });

    //获取审批主页信息
    mock.onGet('/home/info').reply(config => {

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            data: homeInfo,
            code: 200
          }]);
        }, 500);
      });
    });

    //获取日志详情
    mock.onGet('/log/detail').reply(config => {
      let { projectCode } = config.params;
      let mockLog = _Logs.find(user => {
        return user.projectCode === projectCode
      });

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            log: mockLog,
            code: 200
          }]);
        }, 500);
      });
    });

    //获取用户列表（分页）
    mock.onGet('/log/listpage').reply(config => {
      let { page, pageSize } = config.params;
      let mockLogs = _Logs.filter(user => {
        return true;
      });
      let total = mockLogs.length;
      mockLogs = mockLogs.filter((u, index) => index < pageSize * page && index >= pageSize * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            total: total,
            logs: mockLogs
          }]);
        }, 500);
      });
    });

    //获取项目列表（分页）
    mock.onGet('/todo/listpage').reply(config => {
      let { page, code, pageSize } = config.params;
      let mockProjects = _Project.filter(project => {
        if (code && project.projectName.indexOf(code) == -1) return false;
        return true;
      });
      let total = mockProjects.length;
      mockProjects = mockProjects.filter((u, index) => index < pageSize * page && index >= pageSize * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            total: total,
            projects: mockProjects
          }]);
        }, 500);
      });
    });
  }
};