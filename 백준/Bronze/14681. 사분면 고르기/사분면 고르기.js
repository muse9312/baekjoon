const fs = require('fs');

const inputData = fs
  .readFileSync(process.platform === "linux" ? 0 : 'ex.txt')
  .toString()
  .split("\n")
  .map((value) => +value);

const [a, b] = inputData;

function quadrant(a, b) {
    if (a > 0 && b > 0) {
      return 1;
    } else if (a < 0 && b > 0) {
      return 2;
    } else if (a < 0 && b < 0) {
      return 3;
    } else if (a > 0 && b < 0) {
      return 4;
    }
  }
  
  console.log(quadrant(a, b));