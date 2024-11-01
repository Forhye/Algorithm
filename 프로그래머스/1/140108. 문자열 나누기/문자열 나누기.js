function solution(s) {
    let answer = 0
    let countA = 1
    let countB = 0
    let arr = [...s]
    //중복된거 검사
    let set = new Set(arr)

    let stringX=arr[0]
    for(let i =1 ; i<=arr.length ; i++){
        if(set.size === 1){
            return answer=1
        }
        if(stringX === arr[i]){
            countA++
            continue;
        }else {
            countB++
        }
        if(countA === countB){
            answer++
            arr = arr.slice(i+1)
            i=0
            countA=1
            countB=0
            stringX=arr[0]
        }
        if(countB !==0 && i===arr.length){
            answer++
        }
    }
    return answer
}