function solution(arr) {
    return arr.reduce((a, c) => {
        const rec = (min, max) => {
            return (min % max) === 0 ? max : rec(max, min % max)
        }
        let max = 0
        return a*c / rec(a,c)
    })
}

