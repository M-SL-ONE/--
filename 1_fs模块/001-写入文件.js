// 导入fs模块
const fs = require('fs');

// 异步写入文件
fs.writeFile('./座右铭.txt', '三人行，必有我师焉', err => {
    if (err) {
        console.log("写入失败！！！")
        return
    }

    console.log("写入成功@1!!")

    console.log("写入成功@@@@@")

});


// 同步写入文件
// fs.writeFileSync('./data.txt','iloveyou')