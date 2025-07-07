// 1、导入http模块
const http = require('http');

// 2、创建服务对象
const server = http.createServer((request,response)=>{
    // 获取请求方法
    // console.log(request.method)  
    // 获取请求的url
    console.log(request.url) // 只包含url中的路径和查询字符串
    // 
    // console.log(request.httpVersion)
    // 获取http的请求头
    // console.log(request.headers.host)
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end("你好! ");  // 设置响应体
});

// 3、监听端口，启动服务
server.listen(9000,()=>{
    console.log("服务已经启动")
})

// 添加错误处理
server.on('error', (err) => {
  console.error('服务器错误:', err);
});
// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('收到请求'); // 添加日志
// //   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('hello http server');
// });

// server.listen(9000, '0.0.0.0', () => {  // 明确指定监听所有接口
//   console.log(`Server running at http://localhost:9000/`);
// });

// // 添加错误处理
// server.on('error', (err) => {
//   console.error('服务器错误:', err);
// });