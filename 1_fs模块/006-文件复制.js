// 导入fs模块
const fs = require('fs');
const prosess = require('process')

// 1、fs.readFile
// // 同步读取文件
// let data=fs.readFileSync('./观书有感.txt')

// fs.writeFileSync('./观书有感2.txt',data)
// console.log(prosess.memoryUsage())
// 2、流式操作
const rs = fs.createReadStream('./观书有感.txt')

const ws =fs.createWriteStream('./观书有感4.txt')

// rs.on('data',chunk=>{
//     ws.write(chunk)
// })

// rs.on('end',()=>{
//     console.log(prosess.memoryUsage())
// })

rs.pipe(ws)