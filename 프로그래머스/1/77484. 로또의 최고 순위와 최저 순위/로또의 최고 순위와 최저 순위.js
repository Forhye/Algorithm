function solution(lottos, win_nums) {
   
    let answer = [];
    let count=0
    let zeroCount=0
    
    for(let i =0 ; i<lottos.length; i++ ){
        if(lottos[i]!==0){
            if(win_nums.includes(lottos[i])){
                count++
            }
        }else{
            zeroCount++
        }
    }
    //0의개수와 맞힌 개수를 구함 
    switch(count){
        case 0 :  answer[1]=6
            break;
        case 1 :  answer[1]=6  
            break;
        case 2 :  answer[1]=5  
            break;
        case 3 :  answer[1]=4  
            break;
        case 4 :  answer[1]=3  
            break;
        case 5 :  answer[1]=2  
            break;
        case 6 :  answer[1]=1  
            break;
       
    }
    answer[0]=answer[1]-zeroCount
    if(answer[0]===0) answer[0]=1
 
    return answer;
}