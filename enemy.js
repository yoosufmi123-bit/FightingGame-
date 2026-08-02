import * as THREE from "three";


export function createEnemy(){


    const enemy = new THREE.Mesh(

        new THREE.BoxGeometry(
            1,
            2,
            1
        ),

        new THREE.MeshStandardMaterial({
            color:0xff2222
        })

    );


    enemy.position.set(
        2,
        1,
        0
    );


    enemy.userData = {

        health:100,

        attack:false,

        attackCooldown:false

    };


    return enemy;

}





export function updateEnemy(enemy, player){


    const distance =
    enemy.position.distanceTo(
        player.position
    );



    // move toward player

    if(distance > 2){

        if(enemy.position.x < player.position.x){

            enemy.position.x += 0.04;

        }
        else{

            enemy.position.x -= 0.04;

        }

    }




    // attack when close

    if(distance <= 2){

        enemyAttack(enemy);

    }



}





function enemyAttack(enemy){


    if(enemy.userData.attackCooldown)
        return;



    enemy.userData.attack=true;

    enemy.userData.attackCooldown=true;



    enemy.scale.z=1.4;



    setTimeout(()=>{

        enemy.scale.z=1;

        enemy.userData.attack=false;


    },150);



    setTimeout(()=>{


        enemy.userData.attackCooldown=false;


    },700);


}
