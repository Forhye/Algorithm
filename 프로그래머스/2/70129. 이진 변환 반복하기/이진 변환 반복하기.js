function solution(s) {
    let count = 0;
    let totalZero = 0;

    while (s !== "1"){
        let findZero = (s.match(/0/g) || []).length
        totalZero += findZero;
        count++;

        s = s.replaceAll("0","").length.toString(2)
    }

    return [count, totalZero];
}