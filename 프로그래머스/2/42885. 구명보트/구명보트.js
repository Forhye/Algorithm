function solution(people, limit) {
    let answer = 0;

    const sortPeople = people.sort((a,b)=> a-b)
    console.log(sortPeople)
    
    let tiny = 0
    let heavy = sortPeople.length-1
    
    for(;tiny <= heavy;heavy--){
        if(sortPeople[tiny]+sortPeople[heavy] <= limit){
            tiny++
        }
        answer++
    }
    
    return answer;
}