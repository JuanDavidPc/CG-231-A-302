// Crear una escena
const scene = new THREE.Scene();

// Crear una cámara ortográfica
const camera = new THREE.OrthographicCamera(
  window.innerWidth / -2, // left
  window.innerWidth / 2, // right
  window.innerHeight / 2, // top
  window.innerHeight / -2, // bottom
  1, // near
  1000 // far
);

// Crear un renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Puntos vértices del cilindro
const puntos = [
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(1, 0, 0),
  new THREE.Vector3(1, 1, 0),
  new THREE.Vector3(0, 1, 0),
  new THREE.Vector3(0, 0, 1),
  new THREE.Vector3(1, 0, 1),
  new THREE.Vector3(1, 1, 1),
  new THREE.Vector3(0, 1, 1),
];

// Creación de la geometría y material del cilindro
const geometry = new THREE.LatheBufferGeometry(puntos, 12);
const material = new THREE.MeshBasicMaterial({ color: 0xf00f0f });
const cilindro = new THREE.Mesh(geometry, material);

// Agregar el cilindro a la escena
scene.add(cilindro);

// Agregar controles de órbita a la cámara
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Renderizar la escena
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
