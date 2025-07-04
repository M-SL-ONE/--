// 导入fs模块
const fs = require('fs');

// stat
fs.stat('./论语.txt',  (err, data) => {
    if (err) {
        console.log("操作失败",data)
        return
    }
    console.log(data.isFile())
    console.log(data.isDirectory())
});

