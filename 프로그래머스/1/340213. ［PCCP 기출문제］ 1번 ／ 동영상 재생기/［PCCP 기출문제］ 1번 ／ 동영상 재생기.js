function solution(video_len, pos, op_start, op_end, commands) {
    let answer = '';

    let [videoMin, videoSec] = video_len.split(":").map(Number)
    let [curMin, curSec] = pos.split(":").map(Number)
    let [endMin, endSec] = op_end.split(":").map(Number)

    let curVideo = Number(pos.replace(/\D/g, ""))
    const startVideo = Number(op_start.replace(/\D/g, ""))
    const endVideo = Number(op_end.replace(/\D/g, ""))
    const videoLength = Number(video_len.replace(/\D/g, ""))


    for(let i = 0; i<=commands.length; i++) {

        if(startVideo <= curVideo && endVideo >= curVideo){
            curMin = endMin
            curSec = endSec
        }

        if(commands[i] === undefined) break

        if(commands[i] === "next"){
            curSec += 10
            if(curSec >= 60) {
                curSec -= 60
                curMin += 1
            }
        } else {
            curSec -= 10
            if(curSec < 0){
                if(curMin <= 0){
                    curSec=0
                    curMin=0
                    continue
                }
                curMin -= 1
                curSec += 60
            }
        }
        curVideo = (curMin*100) + curSec

        if(curVideo > videoLength){
            curVideo = videoLength
            curMin = videoMin
            curSec = videoSec
        }
    }

    curMin = curMin.toString().padStart(2,0)
    curSec = curSec.toString().padStart(2,0)

    return answer = `${curMin}:${curSec}`;
}

