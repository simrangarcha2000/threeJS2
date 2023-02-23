import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)



// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
//camera.position.x = 2
//amera.position.y = 2
camera.position.z = 2

scene.add(camera)

const controls = new OrbitControls(camera,canvas)
controls.update()

controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()


window.addEventListener('resize', () =>{
    //Update sizes
    console.log('window resized')
    sizes.width =  window.innerWidth
    sizes.height = window.innerHeight

    //Update camera

    camera.aspect = sizes.width/sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width,sizes.height)
})

const tick = () =>
{
    /*const elapsedTime = clock.getElapsedTime()

    // Update objects
    //mesh.rotation.y = elapsedTime;
    camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    camera.position.y = cursor.y * 5*/
    camera.lookAt(mesh.position)
    controls.update()

    // Render
    renderer.render(scene, camera)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()