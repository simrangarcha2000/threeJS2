
import * as THREE from 'three'



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

//*TODO:                        CAMERA


const sizes = {
    width : window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 2
scene.add(camera)



//*TODO:                        RENDER


const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)


renderer.render(scene,camera)