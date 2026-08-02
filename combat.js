import { createHitEffect } from "./effects.js";


let playerHitCooldown = false;
let enemyHitCooldown = false;


export function fight(player, enemy) {


    const distance = 
    player.position.distanceTo(
        enemy.position
    );


    // PLAYER ATTACKS ENEMY

    if(
        player.userData.attack === true &&
        distance < 1.8 &&
        enemyHitCooldown === false
    ){

        enemyHitCooldown = true;


        enemy.userData.health -= 10;


        // knockback

        enemy.position.x += 0.5;


        createHitEffect(
            enemy.position
        );


        setTimeout(()=>{

            enemyHitCooldown = false;

        },400);

    }




    // ENEMY ATTACKS PLAYER

    if(
        enemy.userData.attack === true &&
        distance < 1.8 &&
        playerHitCooldown === false
    ){

        playerHitCooldown = true;


        player.userData.health -= 8;


        // knockback

        player.position.x -= 0.5;


        createHitEffect(
            player.position
        );


        setTimeout(()=>{

            playerHitCooldown = false;

        },400);

    }



    // Prevent negative health

    if(player.userData.health < 0){

        player.userData.health = 0;

    }


    if(enemy.userData.health < 0){

        enemy.userData.health = 0;

    }

}
