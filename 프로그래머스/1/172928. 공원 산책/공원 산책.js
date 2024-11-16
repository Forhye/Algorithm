function solution(park, routes) {
    // 초기 위치 찾기
    let startX = 0, startY = 0;
    for (let i = 0; i < park.length; i++) {
        const idx = park[i].indexOf("S");
        if (idx !== -1) {
            startX = i;
            startY = idx;
            break;
        }
    }

    // 방향 정의
    const directions = {
        "N": [-1, 0], // 북쪽: x-1
        "S": [1, 0],  // 남쪽: x+1
        "W": [0, -1], // 서쪽: y-1
        "E": [0, 1]   // 동쪽: y+1
    };

    let [x, y] = [startX, startY];

    // 명령 처리
    for (const route of routes) {
        const [op, n] = route.split(" ");
        const [dx, dy] = directions[op];
        let [newX, newY] = [x, y];
        let isBlocked = false;

        // 이동 가능 여부 확인
        for (let i = 1; i <= parseInt(n, 10); i++) {
            newX = x + dx * i;
            newY = y + dy * i;

            // 경계를 벗어나거나 장애물이 있는 경우
            if (
                newX < 0 || newX >= park.length ||
                newY < 0 || newY >= park[0].length ||
                park[newX][newY] === "X"
            ) {
                isBlocked = true;
                break;
            }
        }

        // 이동 가능하면 최종 위치 갱신
        if (!isBlocked) {
            x = newX;
            y = newY;
        }
    }

    return [x, y];
}
