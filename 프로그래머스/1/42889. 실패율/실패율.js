function solution(N, stages) {
    let answer = [];
    let result = new Map();
    
  
    for (let i = 1; i <= N; i++) {
      
        let stayCount = stages.filter(stage => stage === i).length;
        
        let reachCount = stages.filter(stage => stage >= i).length;
      
        let failRate = reachCount === 0 ? 0 : stayCount / reachCount;
        result.set(i, failRate);
    }
    
    answer = Array.from(result.entries())
        .sort((a, b) => b[1] - a[1])  
        .map(entry => entry[0]);       
    
    return answer;
}