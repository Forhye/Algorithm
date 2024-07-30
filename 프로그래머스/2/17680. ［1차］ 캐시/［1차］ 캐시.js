function solution(cacheSize, cities){
    let time = 0;
    let cache = [];
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase();
        let idx = cache.indexOf(city);
        if (idx !== -1) {
            //hit
            cache.splice(idx, 1);
            cache.push(city);
            time += 1;
        } else {
            //miss
            cache.push(city);
            time += 5;
            if (cache.length > cacheSize) {
                cache.shift();
            }
        }
    }
    return time;
}