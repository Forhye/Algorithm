function solution(s) {
    let answer = ""
    let cut = s.toLowerCase().split(" ")
    
    for(let i = 0; i < cut.length ; i++){
        if(cut[i] === ""){
            continue
        }
        
        if(/[a-z]/.test(cut[i][0])){
            cut[i] = cut[i][0].toUpperCase() + cut[i].slice(1)
        }
    }
    
    return answer = cut.join().replaceAll(",", " ");
}