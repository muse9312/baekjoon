// 1. 하나의 값을 입력받을 때
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim();

// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// 3. 여러 줄의 값들을 입력받을 때
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
// const fs = require('fs');
// const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
// const fs = require('fs');
// const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
//   ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);
// const n = input[0];
// const n_arr = input.slice(1, n+1);
// const [m, ...m_arr] = input.slice(n+1);


const fs = require('fs');

const filePath = process.platform === 'linux' ? 0 : 'ex.txt';
const input = fs.readFileSync(filePath).toString().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a/b);



// const fs = require('fs');

// const filePath = process.platform === 'linux' ? 0 : 'ex.txt';
// let input = require('fs').readFileSync(filePath).toString().split('\n');
// const a = parseInt(input[0]);
// const b = parseInt(input[1]);
// function quadrant(a, b) {
//     if (a > 0 && b > 0) {
//       return 1;
//     } else if (a < 0 && b > 0) {
//       return 2;
//     } else if (a < 0 && b < 0) {
//       return 3;
//     } else if (a > 0 && b < 0) {
//       return 4;
//     }
//   }
  
//   console.log(quadrant(a, b));