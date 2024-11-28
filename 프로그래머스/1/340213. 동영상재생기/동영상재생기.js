function solution(video_len, pos, op_start, op_end, commands) {
    let answer = '';
    
    let [videoMin, videoSec] = video_len.split(":").map(Number)
    let [curMin, curSec] = pos.split(":").map(Number)
    let [startMin, startSec] = op_start.split(":").map(Number)
    let [endMin, endSec] = op_end.split(":").map(Number)
    
    let curVideo = Number(pos.replace(/\D/g, ""))
    let startVideo = Number(op_start.replace(/\D/g, ""))
    let endVideo = Number(op_end.replace(/\D/g, ""))
    
    if(startVideo <= curVideo && endVideo >= curVideo){
        curMin = endMin
        curSec = endSec
    }
    
    if(curMin < 0){
        curMin = 0
    }
    if(curSec < 0){
        curSec = 0
    }
       
    for(let i = 0; i<commands.length; i++) {
        if(commands[i] === "next"){
            curSec += 10
            if(curSec >= 60){
                curSec -= 60
                curMin += 1
            }
        } else {
            curSec -= 10
            if(curSec < 0){
                curMin -= 1
                curSec += 60
            }
        }
    }
    
    curVideo = Number(String(curMin).padStart(2,0)+String(curSec).padStart(2,0))
    console.log(curVideo)
    
    curMin = curMin.toString().padStart(2,0)
    curSec = curSec.toString().padStart(2,0)
    
    return answer = `${curMin}:${curSec}`;
}
