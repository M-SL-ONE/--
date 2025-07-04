// 导入fs模块
const fs = require('fs');

// 异步追加文件
// fs.appendFile('./座右铭.txt', '\r\n则其善者而从之，则其不善者而改之', err => {
//     if (err) {
//         console.log("写入失败")
//         return
//     }
//     console.log("写入成功")
// });

// 同步追加文件
// fs.appendFileSync('./座右铭.txt','\r\n温故而知新，可以为师矣')

// 追加文件
fs.writeFile('./座右铭.txt','\r\nhi',{flag:'a'},err=>{
    if(err){
        console.log("追加失败")
        return
    }
    console.log("追加成功")
})