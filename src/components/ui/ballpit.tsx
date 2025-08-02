import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";

// Responsive, seamless, interactive ball pit animation for the footer
const BALL_COUNT = 24;
const COLORS = ["#ff7d33", "#ff9800", "#ffb347", "#fff3e0", "#ff5800"];

export default function Ballpit() {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const resizeRef = useRef<() => void>();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;

    // Camera
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 0, 32);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0); // transparent
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffffff, 0.25);
    dir.position.set(0, 10, 20);
    scene.add(dir);

    // Balls
    const balls: THREE.Mesh[] = [];
    const velocities: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < BALL_COUNT; i++) {
      const radius = 1.5 + Math.random() * 1.2;
      const geometry = new THREE.SphereGeometry(radius, 32, 32);
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const material = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.35,
        metalness: 0.15,
        transparent: true,
        opacity: 0.92,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 2
      );
      scene.add(mesh);
      balls.push(mesh);
      velocities.push({
        x: (Math.random() - 0.5) * 0.08,
        y: (Math.random() - 0.5) * 0.08,
        z: (Math.random() - 0.5) * 0.04,
      });
    }

    // Animate
    let last = performance.now();
    function animate() {
      frameRef.current = requestAnimationFrame(animate);
      const now = performance.now();
      const dt = Math.min((now - last) / 16, 2);
      last = now;
      // Ball movement
      for (let i = 0; i < BALL_COUNT; i++) {
        const ball = balls[i];
        const v = velocities[i];
        // Gravity
        v.y -= 0.008 * dt;
        // Move
        ball.position.x += v.x * dt;
        ball.position.y += v.y * dt;
        ball.position.z += v.z * dt;
        // Floor bounce
        if (ball.position.y - ball.geometry.parameters.radius < -7.5) {
          ball.position.y = -7.5 + ball.geometry.parameters.radius;
          v.y *= -0.82 + Math.random() * 0.08;
          v.x += (Math.random() - 0.5) * 0.04;
        }
        // Side walls
        if (ball.position.x - ball.geometry.parameters.radius < -11) {
          ball.position.x = -11 + ball.geometry.parameters.radius;
          v.x *= -0.9;
        }
        if (ball.position.x + ball.geometry.parameters.radius > 11) {
          ball.position.x = 11 - ball.geometry.parameters.radius;
          v.x *= -0.9;
        }
        // Gentle z oscillation
        if (ball.position.z < -3) v.z = Math.abs(v.z);
        if (ball.position.z > 3) v.z = -Math.abs(v.z);
        // Subtle rotation
        ball.rotation.x += 0.01 * dt;
        ball.rotation.y += 0.012 * dt;
      }
      renderer.render(scene, camera);
    }
    animate();

    // Mouse interaction: gentle impulse
    function onPointerMove(e: MouseEvent) {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      // Project to world
      const vector = new THREE.Vector3(x, y, 0.5).unproject(camera);
      balls.forEach((ball, i) => {
        const dist = ball.position.distanceTo(vector);
        if (dist < 3.5) {
          gsap.to(ball.position, {
            x: ball.position.x + (Math.random() - 0.5) * 1.2,
            y: ball.position.y + Math.random() * 1.5,
            z: ball.position.z + (Math.random() - 0.5) * 0.8,
            duration: 0.7,
            ease: "power2.out",
          });
          velocities[i].y += 0.12 + Math.random() * 0.08;
        }
      });
    }
    renderer.domElement.addEventListener("pointermove", onPointerMove);

    // Responsive resize
    function handleResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    resizeRef.current = handleResize;
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameRef.current!);
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[180px] md:h-[220px] rounded-b-3xl overflow-hidden"
      style={{ background: "transparent" }}
      aria-label="Interactive Ballpit Animation"
    />
  );
} 