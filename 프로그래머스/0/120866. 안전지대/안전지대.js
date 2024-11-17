function solution(board) {
    const n = board.length; // 보드의 크기
    const directions = [
        [-1, -1], [-1, 0], [-1, 1], // 위쪽 대각선, 위, 위쪽 대각선 오른쪽
        [0, -1],          [0, 1],   // 왼쪽, 오른쪽
        [1, -1], [1, 0], [1, 1]     // 아래쪽 대각선 왼쪽, 아래, 아래쪽 대각선 오른쪽
    ];

    // 보드 복사 (원본 수정 방지)
    const dangerZone = board.map(row => [...row]);

    // 지뢰를 기준으로 주변 위험 지역 표시
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) { // 지뢰 발견
                directions.forEach(([dx, dy]) => {
                    const nx = i + dx; // 새 x좌표
                    const ny = j + dy; // 새 y좌표
                    if (nx >= 0 && nx < n && ny >= 0 && ny < n) { // 보드 범위 체크
                        dangerZone[nx][ny] = 1; // 위험 지역 표시
                    }
                });
            }
        }
    }

    // 안전한 칸 개수 세기
    let safeCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (dangerZone[i][j] === 0) {
                safeCount++;
            }
        }
    }

    return safeCount;
}
