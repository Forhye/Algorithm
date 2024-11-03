function solution(keymap, targets) {
    let answer = [];

    for(let i =0 ; i<targets.length ; i++){
        targets[i]=[...targets[i]]

        let finalCount=0
        for(let j =0 ; j<targets[i].length ; j++) {
            let minCount= Infinity
            let isIncludes = false

            for(let k =0 ; k<keymap.length ; k++){
                let indexTarget=keymap[k].indexOf(targets[i][j])
                if(indexTarget !== -1){
                    if(minCount===Infinity){
                        minCount=indexTarget
                    }
                    isIncludes=true
                    minCount = Math.min(minCount,indexTarget)
                }
            }
            if(isIncludes) {
                finalCount += minCount + 1
            }else{
                finalCount=-1
                break;
            }

        }
            answer.push(finalCount)
    }

    return answer

}