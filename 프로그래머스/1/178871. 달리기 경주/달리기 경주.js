function solution(players, callings) {
    let playerObj = {}
    
    players.forEach((player, index) => {
        playerObj[player] = index
    })
    
    for(let i = 0 ; i < callings.length ; i++){
        let calledPlayer = callings[i] // kai
        let calledPlayerIndex = playerObj[calledPlayer] // 3
        
        if(calledPlayerIndex > 0) {
            let beforePlayer = players[calledPlayerIndex - 1] // poe
            
            players[calledPlayerIndex] = beforePlayer; // 3, poe
            players[calledPlayerIndex - 1] = calledPlayer; // 2, kai
            
            playerObj[calledPlayer] = calledPlayerIndex -1
            playerObj[beforePlayer] = calledPlayerIndex
        }
        // console.log(players, "객체는", playerObj)
    }
    return players
}