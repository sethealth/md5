
const {createMd5} = require("../dist/index.js");
const fs = require("fs");

const md5 = createMd5();
md5.update(new Uint8Array(fs.readFileSync(process.argv[2])));
console.log(md5.base64());
