console.log(THREE)

/**
 * 4 Elements :
 * Scene 
 * Object 
 * Camera
 * Renderer
 */

const scene = new THREE.Scene();


//Object -> Mesh = (geometry + material)

const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color : '#ff0000'//six values -> 0 to 9 and a to f , usually 7 digits 
});

const mesh = new THREE.Mesh(geometry,material);

scene.add(mesh)


//Sizes 
const sizes = {
    width: 800,
    height: 600
}


//Camera 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // (FOV, Aspect Ratio)
camera.position.z = 3
camera.position.x = 1.5
scene.add(camera)

//Rendered
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas : canvas

})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
