function solution(k, score) {
    let arr = [];
    let result = [];

    for(let i =0 ; i < score.length; i++){
        arr.unshift(score[i])
        arr.sort((a,b)=>b-a)
        if(arr.length > k){
            arr.pop()
            result.push(arr[arr.length-1])
        }else{
            result.push(arr[arr.length-1])
        }
    }


    return result;

}