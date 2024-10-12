function solution(k, score) {
    let arr = [];

    return score.map(s => {
        arr.push(s);
        arr.sort((a, b) => b - a);
        if (arr.length > k) arr.length = k; 
        
        return arr[arr.length - 1];
    });
}