
import * as THREE from 'three'


//*TODO:                        INITIATION


const sizes = {
    width : window.innerWidth,
    height: window.innerHeight
}

const clock = new THREE.Clock()






//*TODO:                        CANVAS


const canvas = document.querySelector('canvas.webgl')



//*TODO:                        SCENE

const scene = new THREE.Scene();


//*TODO:                        OBJECT

const geometry = new THREE.BoxGeometry(1,1,1);

const material = new THREE.MeshBasicMaterial(
    {
        color: "red"
    }
);

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({
    color: "#a68939"
}))

const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({
    color: "#f65891"
}))

cube1.position.y = 2
cube2.position.y = -2
scene.add(cube1,cube2)


//**                             GROUP                                         */

const group = new THREE.Group();
scene.add(group)

group.add(cube1,mesh,cube2)
group.rotation.set(7,4,5)



//*TODO:                        CAMERA


const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 5

scene.add(camera)



//*TODO:                        RENDER


const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)






//!                              ANIMATION 


/**
 * 
 *     1- define clock 
 *      2- Create func
 *       3- elapsed time
 *       4 - add to position
 *       5 Render
 *      6 Requestframe
 *      7 - call Function
 * 
 */


const tick = () => {

    const elapsedTime = clock.getElapsedTime()
    mesh.position.x = Math.sin(elapsedTime)
    cube1.scale.x = Math.cos(elapsedTime)
    cube2.scale.x = Math.sin(elapsedTime)
    group.position.x = Math.sin(elapsedTime)
    renderer.render(scene,camera);
    window.requestAnimationFrame(tick)
}
tick()