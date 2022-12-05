const fs = require('fs');

const filePath = process.platform === 'linux' ? 0 : 'ex.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
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