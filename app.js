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

// ================================================  1008  ================================================

// const fs = require('fs');

// const filePath = process.platform === 'linux' ? 0 : 'ex.txt';
// const input = fs.readFileSync(filePath).toString().split(" ");

// const a = parseInt(input[0]);
// const b = parseInt(input[1]);

// console.log(a/b);

// ================================================ 14681  ================================================


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


// ================================================  4344  ================================================

// 5
// 5 50 50 70 80 100
// 7 100 95 90 80 70 60 50
// 3 70 90 80
// 3 70 90 81
// 9 100 99 98 97 96 95 94 93 91


// const fs = require('fs');

// const filePath = process.platform === 'linux' ? 0 : 'ex.txt';
// // 여러 줄의 값들을 입력받을 때
// const input = fs.readFileSync(filePath).toString().trim().split('\n');


// const tcNum = +input[0]

// for (let i = 1; i <= tcNum; i++) {
    
//     const cn = input[i].split(' ').map(Number); // 각 행의 숫자들
//     const sn = cn[0]; // 학생 수
    
//     let sum = 0; // 초기화
    

//     for (let j = 1; j <= sn; j++) { 
//         sum += cn[j]; // 각 숫자들 합 
//       }

//     const ag = sum / sn // 평균

//     let overagStd = 0; // 평균보다 높은 학생 수 (초기화)

//     for (let k = 1; k <= sn; k++) {
//         if (cn[k] > ag) {
//             overagStd++;
//         }
        
//     }

//     let result = (overagStd /  sn * 100).toFixed(3);
//     console.log(result + '%');


// }

const fs = require('fs');

const filePath = process.platform === 'linux' ? 0 : 'ex.txt';
// 여러 줄의 값들을 입력받을 때
const input = fs.readFileSync(filePath).toString().split(" ");

const A = input[0]; // 아침에 이동하는 수
const B = input[1]; // 밤에 미끄러지는 수
const V = input[2]; // 나무 막대 높이

console.log(Math.ceil((V - B) / (A - B)));