function solution(n) {    
    const collins = (num) => num.toString(2).split("1").length-1
    const nCollin = collins(n)
    
    let nextNum = n+1
    
     while (collins(nextNum) !== nCollin) {
        nextNum++;
    }
    
    return nextNum;
}