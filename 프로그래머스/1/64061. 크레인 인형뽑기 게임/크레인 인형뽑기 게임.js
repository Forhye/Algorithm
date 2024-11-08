function solution(board, moves) {
    let bucket = []
    
    return moves.reduce((acc, cur) => {
        let popBoard = 0
        
        board.reduce((a, c, i) => {
            if(popBoard === 0 && board[i][cur-1] !== 0){        
                popBoard = board[i][cur-1]
                board[i][cur-1] = 0                
            }
            return a    
        },0)
        
        popBoard === 0 ? acc+0 : bucket.push(popBoard)
        
        if(bucket.length >= 2 && bucket[bucket.length-1] === bucket[bucket.length-2]){
            bucket.splice(bucket.length-2, 2)
            acc += 2
        }
        return acc
    },0)
}