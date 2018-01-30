/* eslint-disable no-console */
const util = require("util");

[
  "./index.js",
  "./declaration-use-variable.js",
  "./plain-css.js",
  "./order.js",
  "./scss.js"
].forEach((fileName) => {
  const fileContent = require(fileName);
  console.log(util.inspect(fileContent, false, 4)
    .substr(0, 128));
  console.log("...");
  console.log(`File ${fileName} properly loaded 👍
  `);
});
