function solution(s, skip, index) {
    let answer = '';
    let sArr = [...s];
    let skipSet = new Set([...skip].map(char => char.charCodeAt()));
    
    for (let i = 0; i < sArr.length; i++) {
        let asciiCode = sArr[i].charCodeAt();
        let shifts = 0;
        while (shifts < index) {
            asciiCode++;
            if (asciiCode > 122) asciiCode = 97;
            
            if (!skipSet.has(asciiCode)) {
                shifts++;
            }
        }
        answer += String.fromCharCode(asciiCode);
    }
    
    return answer;
}
