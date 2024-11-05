function solution(n, lost, reserve) {
    lost = lost.sort((a,b) =>a-b)
    let answer = n-lost.length;
    for (let i = lost.length - 1; i >= 0; i--) {
        if(reserve.includes(lost[i])){
            reserve = filterArray(lost[i],reserve)
            lost = filterArray(lost[i],lost)
            answer++
        }
    }
    for(let i = 0 ; i<lost.length; i++){
        let lostPlus = lost[i]+1
        let lostMinus = lost[i]-1

        if(lost[i]===1 && reserve.includes(lostPlus)){
            answer++
            reserve=filterArray(2,reserve)
            continue
        }
        if(reserve.includes(lostMinus)){
            reserve=filterArray(lostMinus,reserve)
            answer++
            continue
        }
        if(reserve.includes(lostPlus)){
            reserve = filterArray(lostPlus,reserve)
            answer++
            continue
        }
    }
    return answer;

}

function filterArray (item,arr){
    return  arr.filter((e) => e !== item);
}