// 导入http模块
const http = require('http');
const fs = require('fs')
const path = require('path');

// 创建服务对象
const server = http.createServer((request, response) => {
    // console.log(request)
    // response.setHeader('content-type','text/html;charset=utf-8')
    let filePath  = path.join(__dirname, './10_table.html'); // 获取请求的文件路径
    let html = fs.readFileSync(filePath )
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
