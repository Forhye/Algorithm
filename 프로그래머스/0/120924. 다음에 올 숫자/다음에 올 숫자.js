function solution(common) {
    let answer = 0;
    
    for(let i = 0 ; i < common.length ; i++){
        let comNum1 = common[1] - common[0]
        let comNum2 = common[2] - common[1]
        
        if(comNum1 === comNum2){
            return answer = Number(common.slice(-1)) + comNum1
        } else {
            let remain = common[2]/common[1]
            return answer = common.slice(-1)*remain
        }
    }
    return answer;
}