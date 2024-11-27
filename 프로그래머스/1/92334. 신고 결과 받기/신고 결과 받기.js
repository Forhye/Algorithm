function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    
    // 중복 신고 제거
    let uniqueReports = [...new Set(report)];
    
    // 신고 횟수 카운팅
    let complainArr = [];
    uniqueReports.forEach(entry => {
        let [complain, badUser] = entry.split(" ");
        complainArr.push(badUser);
    });
    
    const complainCount = complainArr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
    
    // 정지된 유저 찾기
    const ban = new Set();
    for (const [item, count] of Object.entries(complainCount)) {
        if (count >= k) {
            ban.add(item);
        }
    }
    
    // 메일 발송 횟수 계산
    uniqueReports.forEach(entry => {
        let [complain, badUser] = entry.split(" ");
        if (ban.has(badUser)) {
            answer[id_list.indexOf(complain)]++;
        }
    });

    return answer;
}
