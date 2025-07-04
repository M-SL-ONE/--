// 导入fs模块
const fs = require('fs');

// 相对路径
fs.writeFile(__dirname+'/index.html', '三人行，必有我师焉', err => {
    if (err) {
        console.log("写入失败")
        return
    }
    console.log("写入成功")
});

console.log(__dirname)

// 同步写入文件
// fs.writeFileSync('./data.txt', 'iloveyou')