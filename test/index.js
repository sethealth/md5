
const {createMD5} = require("../dist/index.js");

const md5 = createMD5();
md5.update(new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]));
const buffer = Buffer.from(md5.digest());

if (buffer.toString("base64") !== "NndQl1HM9hU5F00rljWnvw==") {
  process.exit(1);
}
