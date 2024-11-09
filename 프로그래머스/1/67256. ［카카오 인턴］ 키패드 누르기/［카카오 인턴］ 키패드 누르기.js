function solution(numbers, hand) {
    let answer = '';
    let leftNum =["1","4","7","*"]
    let rightNum =["3","6","9","#"]
    let middleNum = ["2","5","8","0"]

    let leftHand="*"
    let rightHand="#"
    for(let i=0 ; i<numbers.length; i++){
        
        let strNumbers= String(numbers[i])
        if(leftNum.includes(strNumbers)){
            answer+="L"
            leftHand=strNumbers
        }else if (rightNum.includes(strNumbers)){
            answer+="R"
            rightHand=strNumbers
        }else{
            const middleNumIndex = middleNum.indexOf(strNumbers)
            
            const leftHands=leftNum.indexOf(String(leftHand))
            const rightHands =rightNum.indexOf(String(rightHand))
            
            const leftHandPosition = leftHands === -1
                ? middleNum.indexOf(String(leftHand))
                : leftHands;
            const rightHandPosition = rightHands === -1
                ? middleNum.indexOf(String(rightHand))
                : rightHands;
            
            let left = Math.abs(middleNumIndex - leftHandPosition) //2
            let right = Math.abs(middleNumIndex - rightHandPosition) // 0

            if(leftHands !==-1){
                left+=1
            }
            if(rightHands !==-1){
                right+=1
            }

            if(left>right){
                answer +="R"
                rightHand = strNumbers
            }else if(left<right){
                answer+="L"
                leftHand = strNumbers
            }else {
                if(hand ==="right"){
                    rightHand = strNumbers
                    answer +="R"
                }else if(hand ==="left"){
                    leftHand = strNumbers
                    answer +="L"
                }
            }
        }
    }
    return answer;
}