// 1、导入http模块
const http = require('http');
const url = require('url');

// 2、创建服务对象
const server = http.createServer((request, response) => {
  // console.log(request.url)
  let res = url.parse(request.url,true);
  console.log(res)
  console.log(res.pathname) // 路径
  console.log(res.query.wd)





  response.end("hello")

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