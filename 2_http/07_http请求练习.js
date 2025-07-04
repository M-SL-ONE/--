// 1、导入http模块
const http = require('http');

// 2、创建服务对象
const server = http.createServer((request, response) => {
    // console.log(response)
    response.setHeader('content-type', 'text/html;charset=utf-8')

    let { method } = request;  // 解构赋值
    let { pathname } = new URL(request.url,'http://127.0.0.1')
    console.log(method)
    console.log(pathname)
    if (method === 'GET' && pathname === '/login') {
        response.end("登录页面! ");  // 设置响应体
    } else if (method === 'GET' && pathname === '/reg') {
        response.end("注册页面! ");  // 设置响应体
    } else{
        response.end("404! ");  // 设置响应体
    }
    // response.end("注册页面! ");
});

// 3、监听端口，启动服务
server.listen(9000, () => {
    console.log("服务已经启动")
})

// 添加错误处理
server.on('error', (err) => {
    console.error('服务器错误:', err);
});
