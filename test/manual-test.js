const wr = require('./../dist')
const fs = require('fs')
wr('rainbow')
.then(res => fs.writeFile('index.html',JSON.stringify(res,undefined,2)))
.catch(res => console.log(res)) 