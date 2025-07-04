// 导入fs模块
const fs = require('fs');

// 创建读取流对象
const rs = fs.createReadStream('./观书有感.txt')

// 绑定data事件 chunk 块儿 大块儿
rs.on('data',chunk=>{
    console.log(chunk.toString())
})

//end 可选事件
rs.on('end',()=>{
    console.log("读取完成")
})