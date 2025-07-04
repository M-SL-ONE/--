// 导入fs模块
const fs = require('fs');
const path = require('path')
// console.log(path.resolve(__dirname,'./index.html'))
// console.log(path.resolve(__dirname,'index.html'))

// 读取代码文件
// const files = fs.readdirSync('./代码')

// console.log(files)

// 遍历数组
files.forEach(item=>{
    // console.log(item)
    let data = item.split('-');
    // console.log(data)
    let [num,name]=data;
    if(Number(num)<10){
        num = '0'+num
    }
    let newname = num+'-'+name
    fs.renameSync(`./代码/${item}`,`./代码/${newname}`)
})
