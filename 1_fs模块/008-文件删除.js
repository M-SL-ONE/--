// 导入fs模块
const fs = require('fs');

// 调用unlink方法  unlinkSync
fs.unlink('./观书有感4.txt', err => {
    if (err) {
        console.log("删除失败")
        return
    }
    console.log("删除成功")
})

// 14.4 rmSync
fs.rm('./观书有感3.txt', err => {
    if (err) {
        console.log("删除失败")
        return
    }
    console.log("删除成功")
})