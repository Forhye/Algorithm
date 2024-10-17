function solution(k, m, score) {
    let answer = 0;
    let arr = score.sort((a,b) => (b-a));
    let num = score.length % m // 12 % 3 = 0
    
    arr.splice(-num, num);
    
    for(let i= m - 1 ; i < arr.length ; i += m) {
        answer += arr[i]*m
    }
    
    return answer;
}