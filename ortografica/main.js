var width = window.innerWidth;
var height = window.innerHeight;

// Crear una cámara ortográfica en lugar de una cámara de perspectiva
var camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, -1000, 1000);

// Configurar la posición y la dirección de la cámara
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

// Crear la escena, el renderizador y agregar la cámara
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
scene.add(camera);

// Crear la geometría y el material del cilindro
var geometry = new THREE.CylinderGeometry(100, 100, 200, 32, 1, false);
var material = new THREE.MeshBasicMaterial({color: 0xff0000});

// Crear el objeto visual del cilindro
var cylinder = new THREE.Mesh(geometry, material);

// Agregar el cilindro a la escena
scene.add(cylinder);

// Animar el cilindro
function animate() {
  requestAnimationFrame(animate);
  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();


