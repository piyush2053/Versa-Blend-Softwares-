import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GlobeComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container: any = containerRef.current;

    // SETUP SCENE
    const scene = new THREE.Scene();

    // SETUP RENDERER
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(container.offsetWidth, container.offsetHeight); // Use container width and height
    scene.background = null;
    container.appendChild(renderer.domElement);

    // SETUP LIGHTS
    const light1 = new THREE.PointLight(0x5a54ff, 0.75);
    light1.position.set(-150, 150, -50);

    const light2 = new THREE.PointLight(0x4158f6, 0.75);
    light2.position.set(-400, 200, 150);

    const light3 = new THREE.PointLight(0x803bff, 0.7);
    light3.position.set(100, 250, -100);

    scene.add(light1, light2, light3);

    // SETUP GEOMETRY
    const atmosphereShader = {
      atmosphere: {
        uniforms: {},
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.99 - dot(vNormal, vec3(0, 0, 1.0)), 6.0);
            gl_FragColor = vec4(0.28, 0.48, 1.0, 1.0) * intensity;
          }
        `,
      },
    };

    const atmosphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(atmosphereShader.atmosphere.uniforms),
      vertexShader: atmosphereShader.atmosphere.vertexShader,
      fragmentShader: atmosphereShader.atmosphere.fragmentShader,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });
    const atm = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atm.scale.set(1.05, 1.05, 1.05);
    scene.add(atm);

    atm.position.set(-0.1, 0.1, 0);

    // SETUP GLOBE
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const sphereMaterial = new THREE.MeshLambertMaterial({
      color: 0xeeeeee,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    scene.add(sphere);

    // SETUP MAP OVERLAY
    const loader = new THREE.TextureLoader();
    const overlayMaterial = new THREE.MeshBasicMaterial({
      map: loader.load('https://i.imgur.com/JLFp6Ws.png'),
      transparent: true,
    });

    const overlaySphereGeometry = new THREE.SphereGeometry(2.003, 64, 64);
    const overlaySphere = new THREE.Mesh(overlaySphereGeometry, overlayMaterial);
    overlaySphere.castShadow = true;
    overlaySphere.receiveShadow = true;
    sphere.add(overlaySphere);

    // SETUP BEZIER CURVES
    const numPoints = 100;
    const start = new THREE.Vector3(0, 1.5, 1.3);
    const middle = new THREE.Vector3(0.6, 0.6, 3.2);
    const end = new THREE.Vector3(1.5, -1, 0.8);

    const curveQuad = new THREE.QuadraticBezierCurve3(start, middle, end);
    const tubeMaterial = new THREE.MeshBasicMaterial({
      color: 0xd965fa,
    });

    const tubes = Array.from({ length: 8 }, () => {
      const tube = new THREE.TubeGeometry(curveQuad, numPoints, 0.01, 20, false);
      const curveMesh = new THREE.Mesh(tube, tubeMaterial);
      sphere.add(curveMesh);
      return tube;
    });

    const rotations = [
      { y: 0, z: 0, x: 0 },
      { y: 0.75, z: 0.75, x: -0.1 },
      { y: 2.1, z: 0.5, x: 0.2 },
      { y: 2.3, z: 0.8, x: 0.2 },
      { y: 2.9, z: 1.1, x: 2 },
      { y: 7.1, z: 1, x: 4.4 },
      { y: 2.1, z: 3, x: 4.4 },
      { y: 2.5, z: 1, x: 1.1 },
    ];

    rotations.forEach((rotation, index) => {
      sphere.children[index + 1].rotation.set(rotation.x, rotation.y, rotation.z);
    });

    // SETUP SPIRES
    const cylinderGeometry = new THREE.CylinderGeometry(0.01, 0.01, 4.25, 32);
    const cylinderMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ddff,
      transparent: true,
      opacity: 0.5,
    });

    const cylinders = Array.from({ length: 8 }, () => {
      const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      sphere.add(cylinder);
      return cylinder;
    });

    const cylinderRotations = [
      { x: 0.75, z: 0 },
      { x: -1, z: 2 },
      { x: 0.8, z: 0.5 },
      { x: 1.05, z: 0 },
      { x: 2, z: 3 },
      { x: 0.8, z: 2.5 },
      { x: 0.74, z: -0.05 },
      { x: 0.72, z: -0.07 },
    ];
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });

    const starVertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 50;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    cylinderRotations.forEach((rotation, index) => {
      cylinders[index].rotation.set(rotation.x, 0, rotation.z);
    });

    // DETECT CLICK-DRAG ROTATION
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const onMouseDown = (e: any) => {
      isDragging = true;
      previousMousePosition = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const onMouseMove = (e: any) => {
      if (!isDragging) return;

      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y,
      };

      // Rotate the sphere based on mouse movement
      sphere.rotation.y += deltaMove.x * 0.005;
      sphere.rotation.x += deltaMove.y * 0.005;

      previousMousePosition = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const onMouseUp = () => {
      isDragging = false;
    };
    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    // SETUP CAMERA
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.z = 6;

    let renderCount = 0;
    let currentGrowing = 0;

    const growTube = (index: any, renderCount: any) => {
      renderCount = Math.ceil(renderCount / 3) * 3;
      tubes[index].setDrawRange(0, renderCount);
      if (index > 2) {
        tubes[index - 3].setDrawRange(renderCount, 10000);
      } else {
        tubes[tubes.length - 3 + index].setDrawRange(renderCount, 10000);
      }
    };

    // ANIMATION LOOP
    const animate = () => {
      if (renderCount < 10000) {
        renderCount += 80;
        growTube(currentGrowing, renderCount);
      } else {
        renderCount = 0;

        if (currentGrowing >= tubes.length - 1) {
          currentGrowing = 0;
        } else {
          currentGrowing++;
        }
      }

      requestAnimationFrame(animate);

      if (!isDragging) {
        sphere.rotation.y += 0.0005;
      }

      renderer.render(scene, camera);
    };

    animate();

    const onWindowResize = () => {
      renderer.setSize(container.offsetWidth, container.offsetHeight); // Update renderer size on window resize
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', onWindowResize);


    return () => {
      window.removeEventListener('resize', onWindowResize);
      container.removeEventListener('mousedown', onMouseDown);
      container.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div className="relative h-screen bg-[#040d21] flex flex-col items-center justify-center overflow-hidden ">
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white text-center !z-90">
        <p className="text-[45px] font-thin">Providing Services Around the Globe</p>

      </div>
      <div ref={containerRef} id="globeCanvas" className="h-full w-full left-1/2 mx-auto ">
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-center !z-90">
          <p className="text-lg mt-2 max-w-1xl  text-opacity-80">
            VersaBlend Softwares is a global leader in IT solutions, offering a diverse range of services to clients worldwide.
            From software development to cloud computing, cybersecurity, and AI-driven solutions, we empower businesses across multiple industries with cutting-edge technology and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobeComponent;