function solution(cards1, cards2, goal) {
    let index1 = 0; // cards1의 인덱스
    let index2 = 0; // cards2의 인덱스

    for (const s of goal) {
        if (index1 < cards1.length && cards1[index1] === s) {
            index1++; // cards1에서 다음 요소로 이동
        } else if (index2 < cards2.length && cards2[index2] === s) {
            index2++; // cards2에서 다음 요소로 이동
        } else {
            return "No"; // 일치하지 않으면 "No" 반환
        }
    }

    return "Yes"; // 모든 요소가 성공적으로 처리된 경우
}