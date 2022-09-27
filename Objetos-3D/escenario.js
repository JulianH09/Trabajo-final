//escena
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../image/fondo.jpg', function(texture){
    scene.background = texture;
});

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000);

camera.position.x = 0;
camera.position.y = 1;
camera.position.z = 50;

const blight = new THREE.AmbientLight(0xffffff);
scene.add(blight)

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement);

//GLTF
const gltfloader = new THREE.GLTFLoader();

gltfloader.load('../dragon_ver2/scene.gltf',
(gltf) =>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(3, 3, 3);
    scene.add(loaderObjeto);

    loaderObjeto.rotation.y = 9.5

    loaderObjeto.position.x = 50
    loaderObjeto.position.y = 50
    loaderObjeto.position.z = -70

}
);
gltfloader.load('./autodesk_ninja/scene.gltf',
(gltf) =>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(2,2,2);
    scene.add(loaderObjeto);

    loaderObjeto.position.x = -45
    loaderObjeto.position.y = -22

}
);
gltfloader.load('./ninja2/scene.gltf',
(gltf) =>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(17,17,17);
    scene.add(loaderObjeto);
    
    loaderObjeto.position.x = 10
    loaderObjeto.position.y = -30

}
);

var control = new THREE.OrbitControls( camera, renderer.domElement);
control.minDistance = 3;
control.maxDistance = 60;

//funcion

function animate() {
    requestAnimationFrame( animate );

    renderer.render( scene, camera);
}
animate();  