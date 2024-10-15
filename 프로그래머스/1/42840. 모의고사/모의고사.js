function counter(arr, pArr) {
    let count = 0;
    let pIndex = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === pArr[pIndex]) {
            count += 1;
        }
        pIndex++;
        
        if (pIndex >= pArr.length) {
            pIndex = 0;  // 패턴 배열의 인덱스를 순환하도록 설정
        }
    }
    return count;
}

function solution(answers) {
    const mathLooser = [
        [1, 2, 3, 4, 5], // 1번 수포자의 패턴
        [2, 1, 2, 3, 2, 4, 2, 5], // 2번 수포자의 패턴
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 3번 수포자의 패턴
    ];
    
    let maxCount = 0;
    let losers = [];
    
    mathLooser.map((looser, i) => {
        let count = counter(answers, looser); // 각 수포자의 정답 수를 계산
        if (count > maxCount) {
            losers = [i + 1]; // 가장 높은 점수를 받은 수포자를 초기화
            maxCount = count;
        } else if (count === maxCount) {
            losers.push(i + 1); // 동점인 수포자를 추가
        }
    });
    
    return losers.sort((a, b) => a - b); // 오름차순 정렬 후 반환
}
