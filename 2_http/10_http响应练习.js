// 导入http模块
const http = require('http');
const fs = require('fs')

// 创建服务对象
const server = http.createServer((request, response) => {
    // console.log(response)
    // response.setHeader('content-type','text/html;charset=utf-8')
    let html = fs.readFileSync(__dirname+'/10_table.html')
    response.end(html);  // 设置响应体
});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log("服务已经启动")
})

// 添加错误处理
server.on('error', (err) => {
    console.error('服务器错误:', err);
});
