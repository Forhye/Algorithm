function solution(quiz) {
    let answer = [];
    
    for(let i = 0; i < quiz.length; i++){
        let [firstNum, operetor, secondNum, equal, arrAnswer] = quiz[i].split(" ")
        
        firstNum = Number(firstNum)
        secondNum = Number(secondNum)
        arrAnswer = Number(arrAnswer)
        
        let result
        
        if(operetor === "-"){
            result = firstNum - secondNum // 3 - 4 -1
        }else if(operetor === "+"){
            result = firstNum + secondNum
        }
                
        if(arrAnswer === result){
            answer.push("O")
        }else{
            answer.push("X")
        }
        
    }
    return answer;
}