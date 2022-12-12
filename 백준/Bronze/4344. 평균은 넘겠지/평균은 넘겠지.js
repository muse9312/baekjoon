const fs = require('fs');

const filePath = process.platform === 'linux' ? 0 : 'ex.txt';
// 여러 줄의 값들을 입력받을 때
const input = fs.readFileSync(filePath).toString().trim().split('\n');


const tcNum = +input[0]

for (let i = 1; i <= tcNum; i++) {
    
    const cn = input[i].split(' ').map(Number); // 각 행의 숫자들
    const sn = cn[0]; // 학생 수
    let sum = 0; // 초기화
    

    for (let j = 1; j <= sn; j++) { 
        sum += cn[j]; // 각 숫자들 합 
      }

    const ag = sum / sn // 평균

    let overagStd = 0; // 평균보다 높은 학생 수 (초기화)

    for (let k = 1; k <= sn; k++) {
        if (cn[k] > ag) {
            overagStd++;
        }
        
    }

    let result = (overagStd /  sn * 100).toFixed(3);
    console.log(result + '%');


}