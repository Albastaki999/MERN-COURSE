import path from "node:path"

let myPath = "C:\\Users\\rashi\\OneDrive\\Desktop\\MERN COURSE\\Backend\\path_module\\rashid.txt"
let myPath2 = "C:\\Users\\rashi\\OneDrive\\Desktop\\MERN COURSE\\Backend\\commonjs_ecmascript\\app.js"
console.log(path.extname(myPath));
console.log(path.extname(myPath2));

console.log(path.dirname(myPath));
console.log(path.dirname(myPath2));

console.log(path.basename(myPath));
console.log(path.basename(myPath2));

console.log(path.join("rashid2/hello2"));



