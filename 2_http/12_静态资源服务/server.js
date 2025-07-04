// 导入http模块
const http = require('http');
const fs = require('fs')

// 创建服务对象
const server = http.createServer((request, response) => {
    // console.log(request.url)
    response.setHeader('content-type','text/html;charset=utf-8')
    let { pathname } = new URL(request.url, 'http://127.0.0.1')
    // console.log(1,pathname)
    let filePath = __dirname + '/page' + pathname
    // console.log(2,filePath)
    // fs.readFile(filePath, (err, data) =>{
    //     response.setHeader('content-type','text/html;charset=utf-8')
    //     if(err) {
    //         response.statusCode = 500
    //         response.end('文件读取失败');  // 设置响应体
    //         return;
    //     }
    //     response.end(data);
    // })

    if (pathname === '/') {
        let html = fs.readFileSync(__dirname + '/page/index.html')
        response.end(html);  // 设置响应体
    } else if (pathname === '/css/index.css' || pathname === '/js/index.js') {
        let html = fs.readFileSync(__dirname + '/page' + pathname)
        console.log(html.toString())
        response.end(html);  // 设置响应体
    } else {
        response.statusCode = 404
        response.end('404');  // 设置响应体
    }

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
