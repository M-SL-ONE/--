// 1、导入http模块
const http = require('http');
const url = require('url');

// 2、创建服务对象
const server = http.createServer((request, response) => {
//   new URL(request.url, base) 是 现代 URL 解析方式，推荐替代 url.parse()。
// 主要用途：
// 解析请求路径（pathname）。
// 获取查询参数（searchParams.get()）。
// 动态修改 URL（searchParams.set()）。
  // let url = new URL('http://www.baidu.com/search?a=100&b=10')
  // let url = new URL('/search?a=100&b=10','http://www.baidu.com')
  let res = new URL(request.url,'http://www.baidu.com')
  // console.log(res)
  console.log(res.pathname)
  console.log(res.searchParams.get('q'))

  response.end("new 2")

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