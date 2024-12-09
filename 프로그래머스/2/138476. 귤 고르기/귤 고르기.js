function solution(k, tangerine) {
    const countMap = new Map();
    tangerine.forEach((size) => {
        countMap.set(size, (countMap.get(size) || 0) + 1);
    });

    const sortedCounts = [...countMap.values()].sort((a, b) => b - a);

    let result = 0;
    let total = 0;

    for (const count of sortedCounts) {
        total += count;
        result += 1;
        if (total >= k) {
            break;
        }
    }

    return result;
}
