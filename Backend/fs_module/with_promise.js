import fs from "node:fs/promises"
console.log("Start");

await fs.writeFile("rashid2.txt", "Hello")
let data = await fs.readFile("rashid2.txt")
console.log(data.toString());

await fs.appendFile("rashid2.txt", "1");
data = await fs.readFile("rashid2.txt")
console.log(data.toString());

await fs.appendFile("rashid2.txt", "2");
data = await fs.readFile("rashid2.txt")
console.log(data.toString());

await fs.appendFile("rashid2.txt", "3");
data = await fs.readFile("rashid2.txt")
console.log(data.toString());

await fs.appendFile("rashid2.txt", "4");
data = await fs.readFile("rashid2.txt")
console.log(data.toString());

await fs.appendFile("rashid2.txt", "5");
data = await fs.readFile("rashid2.txt")
console.log(data.toString());


console.log("End");