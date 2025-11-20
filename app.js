// console.log(20+20)
const fs = require('fs')
const os = require('os')
const http = require('http')
// const fruit = (item) => {
//     console.log(item)
// }

// fruit('apple')

// for(i = 1; i <= 5; i++){
//     console.log(i)
// }

// fs.writeFileSync("dummy.txt", "Dummy file just for practice")
// console.log(os.platform())
// console.log(os.hostname());
// console.log(os.cpus())
// console.log(os)

http.createServer((req, resp) => {
    resp.write("<h1>Hello this is mohit</h1>");
    resp.end('end request')
}).listen(4800);
