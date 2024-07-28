function solution(n) {
    let pizza = 1;
    while (pizza * 6 % n) { //0이 false
        pizza++;        
    }
    return pizza;
}
