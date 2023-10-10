import Mock from 'mockjs';


const Projects = []
for (let i = 0; i < 100; i++) {
  Projects.push(Mock.mock({
    projectCode: Mock.Random.guid(),
    projectName: Mock.mock('@ctitle(3,6)'),
    customer: Mock.mock('@ctitle(3,6)'),
    flowtemplateType: Mock.mock('@ctitle(3,6)'),
    customerCode: Mock.Random.word(2, 6),
    flowType: Mock.mock('@ctitle(3,6)'),
    createTime: Mock.Random.datetime(),
  }));
}


export { Projects };