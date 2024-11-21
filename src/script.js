import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

import starsTexture from './assets/stars.jpg';
import sunTexture from './assets/sunTexture';
import venusTexture from './assets/venus.jpg';
import mercuryTexture from './assets/mercury.jpg';
import earthTexture from './assets/earth.jpg';
import marsTexture from './assets/mars.jpg';
import jupiterTexture from './assets/jupiter.jpg';
import saturnTexture from './assets/saturn.jpg';
import saturnRingTexture from './assets/saturn ring.png';
import uranusTexture from './assets/uranus.jpg';
import uranusRingTexture from './assets/uranus ring.png';
import neptuneTexture from './assets/neptune.jpg';
import plutioTexture from './assets/pluto.jpg';
export default function script(){

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);

const orbitControls = new OrbitControls(camera,renderer.domElement);
camera.position.set(-90, 140 ,140);
orbitControls.update();

const ambientLight = new THREE.AmbientLight(0x333333)
scene.add(ambientLight)

const cubeTextureLoader = new THREE.CubeTextureLoader()
scene.background = cubeTextureLoader.load([
    starsTexture, 
    starsTexture, 
    starsTexture, 
    starsTexture, 
    starsTexture, 
    starsTexture
]);

const sunGeo = new THREE.SphereGeometry(16,30,30);
const sunMat = new THREE.MeshBasicMaterial({
    map:textureLoader.load(sunTexture)
});
const sun = new THREE.Mesh(sunGeo,sunMat);
scene.add(sun)

const textureLoader = new THREE.TextureLoader();
function animate(){
    renderer.render(scene,camera)
}
renderer.setAnimationLoop(animate);

window.addEventListener('resize', function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
});
}