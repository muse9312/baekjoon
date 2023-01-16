const fs = require('fs');

const filePath = process.platform === 'linux' ? 0 : 'ex.txt';
// 여러 줄의 값들을 입력받을 때
const input = fs.readFileSync(filePath).toString().trim().split('\n');


const nums = input[1].split(' ').map(Number);
let total = 0; // 총 소수의 개수

nums.forEach(function(n) {
    let isPrime = true; // boolean
    if (n === 1) {
        isPrime = false;
      }
      for (let i = 2; i < n; i++) {
        if (n % i === 0) isPrime = false;
      }
      isPrime === true && total++;
})



console.log(total);