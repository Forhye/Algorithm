function solution(participant, completion) {
    let answer = '';
    
    let participantSort = participant.sort()
    let completionSort = completion.sort()
    
    for( let i = 0 ; i < participantSort.length ; i++){
        if(participantSort[i] !== completionSort[i]){
            return answer += participantSort[i]
        }
    }
    
    
    return answer;
}