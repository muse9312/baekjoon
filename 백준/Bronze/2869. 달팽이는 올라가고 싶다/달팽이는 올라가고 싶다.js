const fs = require('fs');

const filePath = process.platform === 'linux' ? 0 : 'ex.txt';
// 여러 줄의 값들을 입력받을 때
const input = fs.readFileSync(filePath).toString().split(" ");

const A = input[0]; // 아침에 이동하는 수
const B = input[1]; // 밤에 미끄러지는 수
const V = input[2]; // 나무 막대 높이

console.log(Math.ceil((V - B) / (A - B)));