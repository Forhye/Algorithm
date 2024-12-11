function solution(A,B){
    let answer = 0
    
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>b-a)
    
    for(let i = 0; i < A.length ; i++){
        let double = A[i]*B[i]
        answer = answer + double
    }
    return answer;
}