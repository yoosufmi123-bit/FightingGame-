const playerBar =
document.getElementById("playerHealth");


const enemyBar =
document.getElementById("enemyHealth");


const message =
document.getElementById("message");



let finished = false;



export function updateUI(player, enemy){


    if(finished)
        return;



    playerBar.style.width =
    player.userData.health + "%";



    enemyBar.style.width =
    enemy.userData.health + "%";



    if(player.userData.health <= 0){


        message.innerHTML =
        "YOU LOSE";


        finished=true;

    }



    if(enemy.userData.health <= 0){


        message.innerHTML =
        "YOU WIN!";


        finished=true;

    }


}
