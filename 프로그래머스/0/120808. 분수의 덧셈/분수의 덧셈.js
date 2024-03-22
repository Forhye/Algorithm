function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function solution(numer1, denom1, numer2, denom2) {
    let newNumer = numer1 * denom2 + numer2 * denom1; // 두 분수를 더한 분자
    let newDenom = denom1 * denom2; // 두 분수의 분모의 곱

    // 결과를 기약 분수로 만들기 위해 최대공약수를 구함
    let divisor = gcd(newNumer, newDenom);

    // 기약 분수로 나타내기 위해 분자와 분모를 최대공약수로 나눔
    newNumer /= divisor;
    newDenom /= divisor;

    return [newNumer, newDenom];
}

// 테스트
console.log(solution(1, 2, 1, 3)); // 기약 분수로 변환하면 [5, 6]이 됨
