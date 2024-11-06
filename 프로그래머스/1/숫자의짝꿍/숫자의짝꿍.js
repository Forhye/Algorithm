function solution(X, Y) {
    let answer=""
    let arrayX =[...X]
   
    let arrayY = [...Y]
    if(arrayX.length>arrayY.length){
       answer =  result(arrayY,arrayX)
    }else{
        answer=result(arrayX,arrayY)
    }

    
    
    if(answer==="")return "-1"
    return answer;
}

function result(arrayX,arrayY){
    let answer = '';
    arrayX= arrayX.sort((a,b)=>b-a)
    if(arrayX[0]+arrayX[arrayX.length]==="00" &&arrayY.includes("0")){return answer= "0"}
    for(let i =0; i<arrayX.length; i++){
        if(answer==="0"&&arrayX[i]==="0"){continue}
       let findIndex= arrayY.indexOf(arrayX[i])
       
        if(findIndex!==-1){
      arrayY[findIndex]=""
            
            answer+=arrayX[i]
        }
    }
    return answer
}