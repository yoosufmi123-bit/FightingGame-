import * as THREE from "three";


let attacking = false;


export function createPlayer(){


    const body =
    new THREE.Mesh(

        new THREE.BoxGeometry(
            1,
            2,
            1
        ),

        new THREE.MeshStandardMaterial({
            color:0x0088ff
        })

    );


    body.position.set(
        -2,
        1,
        0
    );


    body.userData = {

        health:100,

        attack:false,

        attackCooldown:false

    };


    return body;

}




export function updatePlayer(player, keys){


    const speed = 0.08;



    if(keys["a"]){

        player.position.x -= speed;

    }


    if(keys["d"]){

        player.position.x += speed;

    }



    if(keys["w"] && player.position.y <=1){

        player.position.y += 0.15;

    }
    else if(player.position.y > 1){

        player.position.y -=0.1;

    }



    // Keep player in arena

    if(player.position.x < -5){

        player.position.x=-5;

    }


    if(player.position.x > 5){

        player.position.x=5;

    }


}




export function playerAttack(player){


    if(player.userData.attackCooldown)
        return;



    player.userData.attack=true;

    player.userData.attackCooldown=true;



    // visual punch movement

    player.scale.z = 1.4;



    setTimeout(()=>{


        player.scale.z = 1;


        player.userData.attack=false;


    },150);



    setTimeout(()=>{


        player.userData.attackCooldown=false;


    },500);


}
