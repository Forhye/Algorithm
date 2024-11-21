function solution(bandage, health, attacks) {
    let seconds = attacks[attacks.length-1][0]
    let currentHealth = health;
    let success = 0;
    let bonusHeal = bandage[2]

    for(let i = 1 ; i <= seconds; i++){
        
        let attacked = false
        
        for(let j=0 ; j < attacks.length ; j++){
            if(i === attacks[j][0]){
                currentHealth = currentHealth-attacks[j][1]
                success = 0
                attacked = true
            }
        }
        
        if(currentHealth <= 0){
           currentHealth = -1
           break;
        }
        
        if (attacked) {
            continue;
        }

        if (currentHealth < health) {
            currentHealth += bandage[1];
            success++;
        }

        if (success === bandage[0]) {
            currentHealth += bonusHeal;
            success = 0;
        }
        
        if(currentHealth > health){
            currentHealth = health;
        }
    }
    

    
    return currentHealth;
}