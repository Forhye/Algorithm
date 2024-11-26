function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    
    let complainArr = []
    
    for(let i = 0; i<report.length ; i++){
        let currentComplain = ""
        let [complain, badUser] = report[i].split(" ")
        
        complainArr.push(badUser)
        if(currentComplain !== complain){
            currentComplain = complain
        }else {
            break;
        }
    }
        console.log(complainArr)
    
    const complainCount = complainArr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
    
    const ban = new Set()
    for (const [item, count] of Object.entries(complainCount)){
        if(count === k){
            ban.add(item)
        }
    }
    
    for(let i = 0; i<report.length ; i++){
        let [complain, badUser] = report[i].split(" ")
        
        for(item of ban){
            if(badUser === item){
                answer[id_list.indexOf(complain)]++
            }
        }
    }
    return answer;
}
