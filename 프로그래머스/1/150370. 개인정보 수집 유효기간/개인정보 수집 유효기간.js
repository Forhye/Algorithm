function solution(today, terms, privacies) {
    let answer = [];
    
    const todayNum = Number(today.replace(/\./g, "")) // 20220519
    
    for(let i = 0 ; i < privacies.length ; i++){
        let type = privacies[i][privacies[i].length-1] // A
        
        let year = Number(privacies[i].slice(0,4)) // 2019
        let month = Number(privacies[i].slice(5,7)) // 12 + 12 = 24
        let day = Number(privacies[i].slice(8,10)) // 17 -1 = 16
        
            for(let j = 0 ; j < terms.length ; j++) {
                if(type === terms[j][0]){
                    month += Number(terms[j].slice(2))
                    day -= 1
                }
            }
        
        if(month > 12){
            year += Math.floor(month/12) // 24/12 2 2019+2 = 2021
            month = month%12 // 24-12 = 12
            if(month === 0) {
                year -= 1
                month = 12
            }
        }
        
        if(day === 0) {
            month -= 1 // 0
            day = 28
            if(month === 0) {
                year -= 1 // 2010
                month = 12 // 12
            }
        }
        // 20201217 > 20101228 === 1
        // 20201217 < 20211216
                
        const endDay = Number(`${year}${String(month).padStart(2, '0')}${String(day).padStart(2, '0')}`);
        
        if (todayNum > endDay) {
            answer.push(i + 1);
        }

    }
    
    
    return answer;
}