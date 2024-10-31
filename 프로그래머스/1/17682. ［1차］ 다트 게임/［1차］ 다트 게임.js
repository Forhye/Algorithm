function solution(dartResult) {
    let newArr = dartResult.split(/(?<=\D)(?=\d)/g) // 숫자가 나온 위치에서부터 문자를 나눈다


    let num = 0
    let answer = 0
    for(let i = 0 ; i < newArr.length ; i++){
        const score = newArr[i].match(/(\d+)([A-Za-z])(\*?|\#?)/);
        score[1]=Number(score[1])
        let sum = 0
        switch(score[2]) {
            case "S": sum+=score[1]
                break;
            case "D": sum+=(score[1]*score[1])
                break;
            case "T": sum+=(score[1]*score[1]*score[1])
                break;

        }

        if(newArr[i].includes("#")){
            sum *= -1
        }else if(newArr[i].includes("*")){
            sum *= 2
            answer+= num


        }
        num = sum
        answer += sum

    }
    return answer
}