function solution(wallpaper) {
    let arr = []
    
    let lux = 0
    let luy = Infinity
    let rdx = 0
    let rdy = 0

    // 1 #이 존재하는 가장 작은 번째의 배열을 찾는다 -> 1
    // 2 #이 들어있는 최소 인덱스 값을 구한다. -> 3
    // 3 #이 존재하는 가장 큰 번째의 배열을 찾는다 -> 5
    // 4 #이 들어있는 최대 인덱스 값을 구한다. -> 7 + 1
    
    let luyVariable = 0
    let rdyVariable = 0
    for(let i=0 ; i < wallpaper.length ; i++){
        //1
        arr.push(wallpaper[i].includes("#"))
        
        luyVariable = wallpaper[i].indexOf("#")
        rdyVariable = wallpaper[i].lastIndexOf("#")
        
        if(luyVariable !== -1){
            luy = Math.min(luyVariable, luy) // 0
        }
            rdy = Math.max(rdyVariable, rdy)
        
    }
    
    let isTrue = (element) => element === true
    lux = arr.findIndex(isTrue)
    // rdx = arr.findLast(isTrue)
    rdx = arr.length -1 - arr.slice().reverse().findIndex(isTrue) + 1
    
    return [lux, luy, rdx, rdy+1]
    
}