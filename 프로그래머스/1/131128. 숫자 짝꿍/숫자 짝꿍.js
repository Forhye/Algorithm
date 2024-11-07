function solution(X, Y) {
    let answer = "";
    
    // 각 숫자의 빈도를 계산합니다.
    const countX = Array(10).fill(0);
    const countY = Array(10).fill(0);

    for (const char of X) countX[char]++;
    for (const char of Y) countY[char]++;

    // 공통으로 가지고 있는 숫자를 큰 순서대로 answer에 추가합니다.
    for (let i = 9; i >= 0; i--) {
        const commonCount = Math.min(countX[i], countY[i]);
        answer += String(i).repeat(commonCount);
    }

    // 결과가 빈 문자열이면 "-1"을 반환하고, "0"으로만 구성된 경우 "0"을 반환합니다.
    if (answer === "") return "-1";
    if (answer[0] === "0") return "0";

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