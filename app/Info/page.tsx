"use client"
import React from 'react'
import * as THREE from 'three';
import * as CANNON from 'cannon';
const Info = () => {
  // if (typeof window !== "undefined") {
  //           // Set up Three.js scene
  //           const scene = new THREE.Scene();

  //           // Create a camera
  //           const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 200);
  //           camera.position.z = 3;
    
  //           // Create a renderer with shadowMap enabled
  //           const renderer = new THREE.WebGLRenderer({ antialias: true });
  //           renderer.setSize(window.innerWidth, window.innerHeight);
  //           renderer.shadowMap.enabled = true;
  //           document.getElementById('scene-container')?.appendChild(renderer.domElement);
    
  //           // Create a box geometry
  //           const boxSize = 1;
  //           const geometry = new THREE.IcosahedronGeometry(1, 0);
    
  //           // Create a material with shadows enabled
  //           const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    
  //           // Create a mesh (box)
  //           const box = new THREE.Mesh(geometry, material);
  //           box.castShadow = true; // Enable shadow casting
  //           box.receiveShadow = true; // Enable shadow receiving
  //           scene.add(box);

  //           renderer.setClearColor(0xffffff);
  //           // Create directional light for shadows
  //           const light = new THREE.DirectionalLight(0xffffff, 1);
  //           light.position.set(5, 5, 5);
  //           light.castShadow = true;
  //           scene.add(light);
    
  //           // Set up mouse controls
  //           const mouse = new THREE.Vector2();
  //           const previousMouse = new THREE.Vector2();
  //           const rotationSpeed = 0.01;
  //           let isDragging = false;
    
  //           const onMouseDown = (event) => {
  //               event.preventDefault();
  //               isDragging = true;
  //               previousMouse.x = event.clientX;
  //               previousMouse.y = event.clientY;
  //           };
    
  //           const onMouseUp = () => {
  //               isDragging = false;
  //           };
    
  //           const onMouseMove = (event) => {
  //               if (!isDragging) return;
    
  //               mouse.x = event.clientX;
  //               mouse.y = event.clientY;
    
  //               const deltaX = mouse.x - previousMouse.x;
  //               const deltaY = mouse.y - previousMouse.y;
    
  //               // Rotate the box based on mouse movement
  //               // box.rotation.x += deltaY * rotationSpeed;
  //               box.rotation.y += deltaX * rotationSpeed;
    
  //               previousMouse.x = mouse.x;
  //               previousMouse.y = mouse.y;
  //           };
    
  //           window.addEventListener('mousedown', onMouseDown, false);
  //           window.addEventListener('mouseup', onMouseUp, false);
  //           window.addEventListener('mousemove', onMouseMove, false);

  //           let rotationY = 0;
  //           // Animation
  //           const animate = () => {
  //               requestAnimationFrame(animate);
  //               renderer.render(scene, camera);
  //           };
    
  //           animate();
  // }

  return (
    <>
      {/* <div id='scene-container' className='w-100px'>
        .
      </div> */}
      <p>info</p>
    </>
  
  )
}

export default Info