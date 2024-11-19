function solution(num, total) {
    let answer = [];
    
    // 합 = 숫자의 갯수*(첫번째숫자+마지막숫자) / 2
    let start = (total - ((num-1)*num) / 2) / num
    
    for(let i = 0 ; i < num ; i++){
        answer.push(start + i)
    }
    return answer;
}