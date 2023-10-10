import Mock from 'mockjs';

const homeInfo = Mock.mock({
    message: [{
        content: '这是消息1',
        author: '张三'
    }, {
        content: '这是消息2',
        author: '李四'
    }],
    echart: {
        line: {
            todo: [3, 6, 3, 2, 4, 6, 2, 3, 1, 4],
            already: [7, 8, 8, 6, 7, 6, 10, 9, 8, 8]
        },
        'bie|1-1000000': 11111
    },
    task: {
        'todo|1-100': 1,
        'already|1-100': 100
    }
})
export { homeInfo };