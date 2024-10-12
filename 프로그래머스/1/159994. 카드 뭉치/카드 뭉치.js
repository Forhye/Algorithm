function solution(cards1, cards2, goal) {
    let result = "Yes";
    let a = [];
    let b = [];

    for (let s of goal) {
        let index1 = cards1.indexOf(s);
        let index2 = cards2.indexOf(s);

        if (index1 !== -1) {
            a.push(index1);

            if (
                a.length > 1 &&
                ((a[a.length - 1] - a[a.length - 2]) !== 1 ||
                a[a.length - 2] > a[a.length - 1])
            ) {
                return "No";
            }
        } else if (index2 !== -1) {
            b.push(index2);

            if (
                b.length > 1 &&
                ((b[b.length - 1] - b[b.length - 2]) !== 1 ||
                b[b.length - 2] > b[b.length - 1])
            ) {
                return "No";
            }
        }
    }

    return result;
}