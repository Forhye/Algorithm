function solution(number, limit, power) {
    let answer = 0;
    
    for (let i = 1; i <= number; i++) {
        let divisors = countDivisors(i);
        answer += (divisors > limit) ? power : divisors;
    }
    
    return answer;
}

function countDivisors(num) {
    let count = 0;
    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
            if (i * i === num) {
                count++;
            } else {
                count += 2;
            }
        }
    }
    return count;
}