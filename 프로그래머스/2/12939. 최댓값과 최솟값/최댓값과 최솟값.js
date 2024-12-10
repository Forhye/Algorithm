function solution(s) {
   
    let transEmpty = s.split(/\s/).map(Number).sort((a,b)=>a-b)
    
    return `${transEmpty[0]} ${transEmpty[transEmpty.length-1]}`
}