function solution(slice, n) {
    
    let pizza = 1;
    if(n === 1) return pizza;
    if(n%slice === 0) {
        return n/slice;
    } 
    return parseInt(n/slice) + 1;
}

// slice 조각
// n 피자 판

