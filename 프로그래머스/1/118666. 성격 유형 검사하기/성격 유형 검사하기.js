function solution(survey, choices) {
    let answer = "";
    let choiceScore = [3,2,1,0,1,2,3]
    let score = {
        R:0, T:0,
        C:0, F:0,
        J:0, M:0,
        A:0, N:0,
    }
    
    for (let i = 0 ; i < choices.length ; i++) {
        let alphabat = ""
        
        if(choices[i] < 4){
            alphabat = survey[i].slice(0,1)
            score[alphabat] += choiceScore[choices[i]-1]
            
        }else if(choices[i] > 4){
            alphabat = survey[i].slice(-1)
            score[alphabat] += choiceScore[choices[i]-1]
        }
    }
    
    score.R > score.T || score.R === score.T ? answer+="R" : answer+="T"
    score.C > score.F || score.C === score.F ? answer+="C" : answer+="F"
    score.J > score.M || score.J === score.M ? answer+="J" : answer+="M"
    score.A > score.N || score.A === score.N ? answer+="A" : answer+="N"

    return answer;
}

