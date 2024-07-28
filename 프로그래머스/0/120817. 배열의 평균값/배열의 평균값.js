
function solution(numbers) {
    const sum = numbers.reduce((a,c)=> {return a+c});
    return sum/numbers.length;
}