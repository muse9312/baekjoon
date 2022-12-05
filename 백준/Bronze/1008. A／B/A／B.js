const fs = require("fs");

const inputData = fs
  .readFileSync(
    process.platform === "linux" ? 0 : "../../../../index.txt"
  )
  .toString()
  .split(" ")
  .map((value) => +value);

const [a, b] = inputData;

console.log(a / b);