import * as THREE from "three";


const effects = [];



export function createHitEffect(position){


    const geometry =
    new THREE.SphereGeometry(
        0.15,
        8,
        8
    );


    const material =
    new THREE.MeshBasicMaterial({

        color:0xffff00

    });



    const effect =
    new THREE.Mesh(
        geometry,
        material
    );


    effect.position.copy(
        position
    );


    effect.userData.life = 15;



    // Add to scene through global scene reference

    if(window.gameScene){

        window.gameScene.add(
            effect
        );

    }


    effects.push(effect);


}





export function updateEffects(){


    effects.forEach((effect,index)=>{


        effect.scale.multiplyScalar(
            1.1
        );


        effect.userData.life--;



        if(effect.userData.life <=0){


            if(effect.parent){

                effect.parent.remove(
                    effect
                );

            }


            effects.splice(
                index,
                1
            );


        }


    });


}
