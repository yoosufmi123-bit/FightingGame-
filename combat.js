import { createHitEffect } from "./effects.js";


let playerHitCooldown = false;
let enemyHitCooldown = false;



export function fight(player, enemy){


    const distance =
    player.position.distanceTo(
        enemy.position
    );



    // Player hits enemy

    if(
        player.userData.attack &&
        distance < 2 &&
        !enemyHitCooldown
    ){

        enemyHitCooldown=true;


        enemy.userData.health -= 10;


        enemy.position.x += 0.4;


        createHitEffect(
            enemy.position
        );


        setTimeout(()=>{

            enemyHitCooldown=false;

        },300);

    }




    // Enemy hits player

    if(
        enemy.userData.attack &&
        distance < 2 &&
        !playerHitCooldown
    ){

        playerHitCooldown=true;


        player.userData.health -= 8;


        player.position.x -= 0.4;


        createHitEffect(
            player.position
        );


        setTimeout(()=>{

            playerHitCooldown=false;

        },300);

    }




    // Stop health from going negative

    if(player.userData.health < 0){

        player.userData.health=0;

    }


    if(enemy.userData.health < 0){

        enemy.userData.health=0;

    }

}
