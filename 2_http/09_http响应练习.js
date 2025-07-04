// 导入http模块
const http = require('http');

// 创建服务对象
const server = http.createServer((request, response) => {
    // console.log(response)
    // response.setHeader('content-type','text/html;charset=utf-8')
    response.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                td{
                    padding:20px 40px
                }
                table tr:nth-child(odd){
                    background:#aef;
                }
                table tr:nth-child(even){
                    background:#fcb;
                }
                table,td{
                    border-collapse:collapse
                }
            </style>
        </head>
        <body>
            <table border="1">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <script>
                let tds = document.querySelectorAll('td')
                tds.forEach(item=>{
                    item.onclick=function(){
                        this.style.background='#222'
                    }
                })
            </script>
        </body>
        </html>
        `);  // 设置响应体
});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log("服务已经启动")
})

// 添加错误处理
server.on('error', (err) => {
    console.error('服务器错误:', err);
});
