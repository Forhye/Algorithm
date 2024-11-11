function solution(money) {
    let answer = [];
    
    answer.push(Math.floor(money/5500), money%5500)
    
    return answer;
}