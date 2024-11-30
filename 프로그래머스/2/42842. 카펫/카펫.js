function solution(brown, yellow) {
    let width = 0
    let height = 0
    
    let totalSize = brown+yellow
    
    for(let i = 1; i <= Math.sqrt(totalSize); i++){
        if(totalSize % i === 0){
            let w = totalSize / i
            
            if((w-2) * (i-2) === yellow) {
                width = w
                height = i
                break
            }
        }
    }
    
    return [width, height];
}