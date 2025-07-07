// 导入http模块
const http = require('http');
const fs = require('fs')
const path = require('path');
const mime = require('mime'); // 引入 mime-types 模块

// 创建服务对象
const server = http.createServer((request, response) => {
    // console.log(request)
    response.setHeader('content-type', 'text/html;charset=utf-8')

    // 第一种
    // let filePath  = path.join(__dirname,'./index.html'); // 获取请求的文件路径
    // let html = fs.readFileSync(filePath )
    // response.end(html);  // 设置响应体

    // 第二种
    // let { pathname } = new URL(request.url, 'http://127.0.0.1:9000/')// 获取请求的路径
    // if (pathname === '/index.html') {
    //     let filePath = path.join(__dirname, '/pages/index.html'); // 获取请求的文件路径
    //     response.setHeader('Content-Type', 'text/html'); // 设置 HTML 类型
    //     response.end(fs.readFileSync(filePath));  // 设置响应体
    // } else if (pathname === '/css/index.css') {
    //     response.setHeader('Content-Type', 'text/css'); // 设置 CSS 类型
    //     let filePath = path.join(__dirname, '/pages'+pathname); // 获取请求的文件路径
    //     response.end(fs.readFileSync(filePath));  // 设置响应体
    // }else if ( pathname === '/js/index.js') {
    //     response.setHeader('Content-Type', 'application/javascript'); // 设置 JS 类型
    //     let filePath = path.join(__dirname, '/pages'+pathname); // 获取请求的文件路径
    //     response.end(fs.readFileSync(filePath));  // 设置响应体
    // } else {
    //     response.statusCode = 404 // 获取请求的文件路径
    //     response.end("404");  // 设置响应体
    // }

    // 第三种
    let { pathname } = new URL(request.url, 'http://127.0.0.1:9000/')// 获取请求的路径
    // let root = __dirname + '/../../../'
    let root = __dirname + '/pages'
    let filePath = root + pathname
    // let filePath = path.join(__dirname, '/pages' + pathname); // 获取请求的文件路径
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.statusCode = 404; // 设置状态码为404
            response.end("404 Not Found"); // 设置响应体
            return; // 结束响应
        } else {
            // 第一种
            // 根据文件类型设置响应头
            if (pathname.endsWith('.html')) {
                response.setHeader('Content-Type', 'text/html;charset=utf-8');
            } else if (pathname.endsWith('.css')) {
                response.setHeader('Content-Type', 'text/css');
            } else if (pathname.endsWith('.js')) {
                response.setHeader('Content-Type', 'application/javascript');
            } else {
                response.setHeader('Content-Type', 'text/plain');
            }


            response.end(data); // 设置响应体
        }
    })
    // if (pathname === '/index.html') {
    //     let filePath = path.join(__dirname, '/pages/index.html'); // 获取请求的文件路径
    //     response.setHeader('Content-Type', 'text/html'); // 设置 HTML 类型
    //     response.end(fs.readFileSync(filePath));  // 设置响应体
    // } else if (pathname === '/css/index.css') {
    //     response.setHeader('Content-Type', 'text/css'); // 设置 CSS 类型
    //     let filePath = path.join(__dirname, '/pages' + pathname); // 获取请求的文件路径
    //     response.end(fs.readFileSync(filePath));  // 设置响应体
    // } else if (pathname === '/js/index.js') {
    //     response.setHeader('Content-Type', 'application/javascript'); // 设置 JS 类型
    //     let filePath = path.join(__dirname, '/pages' + pathname); // 获取请求的文件路径
    //     response.end(fs.readFileSync(filePath));  // 设置响应体
    // } else {
    //     response.statusCode = 404 // 获取请求的文件路径
    //     response.end("404");  // 设置响应体
    // }

});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log("服务已经启动")
})

// 添加错误处理
server.on('error', (err) => {
    console.error('服务器错误:', err);
});
