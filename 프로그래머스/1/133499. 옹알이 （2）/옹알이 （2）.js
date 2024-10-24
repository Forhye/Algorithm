function solution(babbling) {
    let possible = ["aya", "ye", "woo", "ma"]
   
    let result=0
    for(let i = 0; i<babbling.length ; i++ ){

        //미포함단어추출
        let arrElement = babbling[i];
        let valid =true;

        if(babbling[i].length<1){
            valid=false
        }
        if(babbling[i].includes("mayaa")){
            valid=false
        }

        // 1.첫글자 검증
        let firstWordValid = true;
        let firstWord = 0;
        while (firstWordValid) {
            if (babbling[i].indexOf(possible[firstWord]) === 0) {
  
                firstWordValid = false;
            } else {
                firstWord++;
            }
            if (firstWord === possible.length) {
                valid = false;
                firstWordValid = false;
            }
        }
        //2. 미포함 단어찾기
        for (let j = 0; j < possible.length; j++) { //2
            while (arrElement.includes(possible[j])) {      //ye
                arrElement = arrElement.replaceAll(possible[j], ' ');
            }
        }
        
        //정규식 공백제거
        arrElement = arrElement.trim();
        if (arrElement.length > 0) {
            valid = false;
        }


        //3. 반복되는 단어찾기
        for (let j = 0; j < possible.length; j++) {
            if(!valid){
                break
            }
            let searchIndexNum = 0;
            while (valid) {
                if (searchIndexNum === -1) {
                    break;
                }
                searchIndexNum = babbling[i].indexOf(possible[j], searchIndexNum);
                5

                // 다음 인덱스에서 반복 확인
                let nextNum = babbling[i].indexOf(possible[j], searchIndexNum + possible[j].length);//8 -1
                //반복되면
                if (nextNum === searchIndexNum + possible[j].length) {
                    valid = false; // 반복이 감지되면 valid를 false로 설정
                    break;
                }

                searchIndexNum =nextNum;
            }

        }



        if (valid) {
            result++;
        }

    }
    return result;

}