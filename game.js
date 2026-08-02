import * as THREE from "three";

import { createPlayer, updatePlayer, playerAttack } from "./player.js";
import { createEnemy, updateEnemy } from "./enemy.js";
import { fight } from "./combat.js";
import { updateUI } from "./ui.js";



let scene;
let camera;
let renderer;


let player;
let enemy;


let keys = {};



setup();
animate();




function setup(){


    scene = new THREE.Scene();

    scene.background =
    new THREE.Color(0x222222);



    camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
    );


    camera.position.set(
        0,
        4,
        8
    );



    renderer =
    new THREE.WebGLRenderer({
        antialias:true
    });


    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );


    document.body.appendChild(
        renderer.domElement
    );




    const light =
    new THREE.DirectionalLight(
        0xffffff,
        2
    );


    light.position.set(
        5,
        10,
        5
    );


    scene.add(light);



    scene.add(
        new THREE.AmbientLight(
            0xffffff,
            0.5
        )
    );



    // arena floor

    const floor =
    new THREE.Mesh(

        new THREE.PlaneGeometry(
            20,
            20
        ),

        new THREE.MeshStandardMaterial({
            color:0x444444
        })

    );


    floor.rotation.x =
    -Math.PI/2;


    scene.add(floor);




    player =
    createPlayer();


    enemy =
    createEnemy();



    scene.add(player);

    scene.add(enemy);




    window.addEventListener(
        "keydown",
        e=>{
            keys[e.key.toLowerCase()] = true;


            if(e.key.toLowerCase()=="j"){

                playerAttack(player);

            }

        }
    );



    window.addEventListener(
        "keyup",
        e=>{
            keys[e.key.toLowerCase()] = false;
        }
    );


    window.addEventListener(
        "resize",
        resize
    );

}




function animate(){


    requestAnimationFrame(
        animate
    );



    updatePlayer(
        player,
        keys
    );


    updateEnemy(
        enemy,
        player
    );



    fight(
        player,
        enemy
    );



    updateUI(
        player,
        enemy
    );



    camera.lookAt(
        0,
        1,
        0
    );



    renderer.render(
        scene,
        camera
    );

}




function resize(){

    camera.aspect =
    window.innerWidth /
    window.innerHeight;


    camera.updateProjectionMatrix();


    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

}
