// 1、导入http模块
const http = require('http');

// 2、创建服务对象
const server = http.createServer((request, response) => {

  // 用于处理 HTTP 请求流的 数据接收部分，常见于服务器处理 POST、PUT 等带有请求体的请求
  // let body = ''
  // request.on('data', chunk => {
  //   body += chunk;
  // })

  // request.on('end',()=>{
  //   console.log(body)
  //   response.end("hello")
  // })


// body += chunk 的潜在问题
// 如果 chunk 是 Buffer（二进制数据），直接 += 会导致隐式转换为字符串，可能损坏二进制文件（如上传的图片）。
  const chunks = [];
  request.on('data', chunk => chunks.push(chunk));
  request.on('end', () => {
    const body = Buffer.concat(chunks); // 正确拼接二进制数据
    console.log('Received body:', body.toString()); // 输出接收到的请求体内容
    response.end("hello http server, " + body.toString()); // 响应客户端
  });
});

// 3、监听端口，启动服务
server.listen(9000, () => {
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