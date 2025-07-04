// 导入http模块
const http = require('http');
const fs = require('fs')

// 创建服务对象
const server = http.createServer((request, response) => {
    // console.log(response)
    let { pathname } = new URL(request.url, 'http://127.0.0.1')

    if (pathname === '/') {
        let html = fs.readFileSync(__dirname + '/10_table.html')

        response.end(html);  // 设置响应体
    } else if (pathname === '/index.css' || pathname === '/index.js') {
        let html = fs.readFileSync(__dirname + pathname)
        response.end(html);  // 设置响应体
    } else {
        response.statusCode = 404
        response.end('404');  // 设置响应体
    }
    // response.setHeader('content-type','text/html;charset=utf-8')

    // console.log(response)

});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log("服务已经启动")
})

// 添加错误处理
server.on('error', (err) => {
    console.error('服务器错误:', err);
});
