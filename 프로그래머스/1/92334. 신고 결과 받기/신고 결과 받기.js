function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0)
    
    let duplComplainDelete = [...new Set(report)]
    let complainArr = []
    
    for (let i = 0; i < duplComplainDelete.length; i++) {
        let [complain, badUser] = duplComplainDelete[i].split(" ");
        complainArr.push(badUser);
    }
    
    const complainCount = complainArr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc
    }, {})
    
    const ban = new Set()
    for (const [item, count] of Object.entries(complainCount)){
        if(count >= k){
            ban.add(item)
        }
    }
    
    duplComplainDelete.forEach(item => {
        let [complain, badUser] = item.split(" ");
        if (ban.has(badUser)) {
            answer[id_list.indexOf(complain)]++;
        }
    })
    
    return answer;
}