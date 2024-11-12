function solution(new_id) {
    let result =''
    let answer = new_id.toLowerCase().match(/[a-z0-9-_.]+/g).join('')
                .replace(/\.{2,}/g, '.')
                .replace(/^\./,'')
                .replace(/\.$/,'')
    
    if(answer === ''){
       answer+='a'
    }

    if (answer.length >= 16) {
        answer = answer.slice(0, 15);
        console.log(answer)
        answer = answer.replace(/\.$/, '');
    }

    
    if(answer.length <= 2){
        while(answer.length < 3){
            answer += answer[answer.length-1]
        }
    }
    
    return answer;
}