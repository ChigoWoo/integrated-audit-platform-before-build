import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某',
    roleType: 0 // 0 为管理员 1为一般用户
  },
  {
    id: 2,
    username: 'Chigo',
    password: '123456789',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '李某某',
    roleType: 1
  }
];

const Logs = [];

for (let i = 0; i < 86; i++) {
  Logs.push(Mock.mock({
    projectCode: Mock.Random.guid(),
    handler: Mock.Random.cname(),
    handlerBank: Mock.mock('@county(true)'),
    handlerOrgan: Mock.mock('@county(true)'),
    handlerDepart: Mock.mock('@county(true)'),
    handletime: Mock.Random.datetime(),
    handleFinishtime: Mock.Random.datetime(),
    'sector|1': ['业务审核人', '公司秘书', '客户经理'],
    'handleRes|1': [
      "同意",
      "退回",
    ],
    'sectorRes|1': [
      "已受理",
      "提交任务",
      "已完成"
    ]
  }));
}

const Projects = []
for (let i = 0; i < 86; i++) {
  Projects.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.mock('@ctitle(3,6)'),
    alias: Mock.Random.word(2, 6),
    createTime: Mock.Random.datetime(),
  }));
}

export { LoginUsers, Logs, Projects };