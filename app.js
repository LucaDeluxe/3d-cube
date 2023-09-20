// Initialisation de la scène et de la caméra
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Initialisation du rendu
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Ajout du GridHelper
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);

// Création d'un cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Initialisation de dat.GUI
const gui = new dat.GUI();
const cubeProperties = {
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0,
  positionX: 0,
  positionY: 0,
  positionZ: 0,
};
gui.add(cubeProperties, 'rotationX', 0, Math.PI * 2);
gui.add(cubeProperties, 'rotationY', 0, Math.PI * 2);
gui.add(cubeProperties, 'rotationZ', 0, Math.PI * 2);
gui.add(cubeProperties, 'positionX', 0, Math.PI * 2);
gui.add(cubeProperties, 'positionY', 0, Math.PI * 2);
gui.add(cubeProperties, 'positionZ', 0, Math.PI * 2);

// Fonction d'animation
const animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x = cubeProperties.rotationX;
  cube.rotation.y = cubeProperties.rotationY;
  cube.rotation.z = cubeProperties.rotationZ;
  cube.position.x = cubeProperties.positionX;
  cube.position.y = cubeProperties.positionY;
  cube.position.z = cubeProperties.positionZ;

  renderer.render(scene, camera);
};

// Lancement de l'animation
animate();

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(newWidth, newHeight);
});