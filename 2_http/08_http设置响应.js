// 1、导入http模块
const http = require('http');

// 2、创建服务对象
const server = http.createServer((request,response)=>{
    // console.log(response)
    response.setHeader('content-type','text/html;charset=utf-8')
    // response.statusCode=201
    // response.statusMessage='hi'
    response.write("hello world! ");  // 设置响应体的一部分
    response.write("你好，世界！ ");  // 设置响应体的另一部分
    response.end();  // 设置响应体
});

// 3、监听端口，启动服务
server.listen(9000,()=>{
    console.log("服务已经启动")
})

// 添加错误处理
server.on('error', (err) => {
  console.error('服务器错误:', err);
});
