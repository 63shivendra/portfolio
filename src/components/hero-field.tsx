"use client";

import { useEffect, useRef } from "react";
import type * as THREE from "three";

type ThreeModule = typeof import("three");

type IdleWindow = Window & {
  requestIdleCallback?: (
    callback: () => void,
    options?: { timeout: number },
  ) => number;
  cancelIdleCallback?: (id: number) => void;
};

/**
 * A small, lazy inference lattice behind the hero. Three.js is loaded after
 * idle, the canvas is desktop-only, and the render loop stops when the hero
 * scrolls away. Reduced-motion users get one static frame.
 */
export function HeroField() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    if (window.matchMedia("(max-width: 767px)").matches) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let disposed = false;
    let cleanup: (() => void) | undefined;
    let cancelIdle: (() => void) | undefined;

    const start = () => {
      if (disposed) return;
      void import("three")
        .then((three) => {
          if (disposed) return;
          cleanup = mountField(three, host, reduceMotion);
        })
        .catch(() => {
          // The CSS dot field remains as the fallback when WebGL is absent.
        });
    };

    const idleWindow = window as IdleWindow;
    if (idleWindow.requestIdleCallback) {
      const id = idleWindow.requestIdleCallback(start, { timeout: 1400 });
      cancelIdle = () => idleWindow.cancelIdleCallback?.(id);
    } else {
      const id = window.setTimeout(start, 500);
      cancelIdle = () => window.clearTimeout(id);
    }

    return () => {
      disposed = true;
      cancelIdle?.();
      cleanup?.();
      host.removeAttribute("data-ready");
    };
  }, []);

  return <div ref={hostRef} aria-hidden className="hero-field hidden md:block" />;
}

function mountField(
  THREE: ThreeModule,
  host: HTMLDivElement,
  reduceMotion: boolean,
): () => void {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 8.4);

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
  } catch {
    return () => {};
  }

  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.display = "block";
  renderer.domElement.setAttribute("aria-hidden", "true");
  host.appendChild(renderer.domElement);

  const group = new THREE.Group();
  group.position.set(1.55, 0.05, 0);
  group.rotation.x = -0.18;
  scene.add(group);

  const cloud = new THREE.Group();
  group.add(cloud);

  const count = 920;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const palette = [
    new THREE.Color("#c8f751"),
    new THREE.Color("#5eead4"),
    new THREE.Color("#a78bfa"),
    new THREE.Color("#ff6b4a"),
  ];

  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2;
    const ring = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;
    const shell = 2.05 + Math.sin(i * 12.9898) * 0.16;

    positions[i * 3] = Math.cos(theta) * ring * shell;
    positions[i * 3 + 1] = y * shell;
    positions[i * 3 + 2] = Math.sin(theta) * ring * shell;

    const height = (y + 1) / 2;
    const color =
      palette[i % 2 === 0 ? (height > 0.56 ? 0 : 1) : height < 0.35 ? 3 : 2];
    const shade = 0.55 + Math.random() * 0.45;

    colors[i * 3] = color.r * shade;
    colors[i * 3 + 1] = color.g * shade;
    colors[i * 3 + 2] = color.b * shade;
  }

  const pointGeometry = new THREE.BufferGeometry();
  pointGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3),
  );
  pointGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const pointTexture = makePointTexture(THREE);
  const pointMaterial = new THREE.PointsMaterial({
    size: 0.055,
    map: pointTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    alphaTest: 0.02,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(pointGeometry, pointMaterial);
  cloud.add(points);

  // A few local edges make the cloud read as a system, not a star field.
  const linePositions: number[] = [];
  for (let i = 0; i < 110; i += 1) {
    const a = Math.floor(Math.random() * count);
    const b = Math.floor(Math.random() * count);
    if (a === b) continue;

    const ax = positions[a * 3];
    const ay = positions[a * 3 + 1];
    const az = positions[a * 3 + 2];
    const bx = positions[b * 3];
    const by = positions[b * 3 + 1];
    const bz = positions[b * 3 + 2];
    const distance = Math.hypot(ax - bx, ay - by, az - bz);

    if (distance > 1.15) continue;
    linePositions.push(ax, ay, az, bx, by, bz);
  }

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(linePositions, 3),
  );
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x5eead4,
    transparent: true,
    opacity: 0.08,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  cloud.add(lines);

  const ringA = makeRing(THREE, 2.55, "#c8f751", 0.14);
  ringA.rotation.x = Math.PI / 2.35;
  ringA.rotation.z = 0.35;
  group.add(ringA);

  const ringB = makeRing(THREE, 2.15, "#a78bfa", 0.1);
  ringB.rotation.x = Math.PI / 1.7;
  ringB.rotation.z = -0.55;
  group.add(ringB);

  const pointer = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };
  const onPointerMove = (event: PointerEvent) => {
    target.x = (event.clientX / window.innerWidth - 0.5) * 2;
    target.y = (event.clientY / window.innerHeight - 0.5) * 2;
  };
  if (!reduceMotion) {
    window.addEventListener("pointermove", onPointerMove, { passive: true });
  }

  let visible = true;
  let raf = 0;
  let lastFrame = 0;

  const resize = () => {
    const width = Math.max(host.clientWidth, 1);
    const height = Math.max(host.clientHeight, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const draw = (elapsed: number) => {
    cloud.rotation.y = elapsed * 0.065 + pointer.x * 0.22;
    cloud.rotation.x = Math.sin(elapsed * 0.18) * 0.06 + pointer.y * 0.12;
    group.rotation.x = -0.18 + pointer.y * 0.04;
    camera.position.x += (pointer.x * 0.25 - camera.position.x) * 0.04;
    camera.position.y += (-pointer.y * 0.15 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  };

  const frame = (now: number) => {
    raf = 0;
    if (!visible || document.hidden) return;

    if (now - lastFrame < 32) {
      raf = requestAnimationFrame(frame);
      return;
    }

    lastFrame = now;
    pointer.x += (target.x - pointer.x) * 0.045;
    pointer.y += (target.y - pointer.y) * 0.045;
    draw(now * 0.001);
    raf = requestAnimationFrame(frame);
  };

  const kick = () => {
    if (reduceMotion || raf || !visible || document.hidden) return;
    raf = requestAnimationFrame(frame);
  };

  const onVisibility = () => {
    if (!document.hidden) kick();
  };

  resize();
  draw(0);
  host.dataset.ready = "true";

  const resizeObserver = new ResizeObserver(() => {
    resize();
    if (reduceMotion) draw(0);
  });
  resizeObserver.observe(host);

  const intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      kick();
    },
    { threshold: 0.05 },
  );
  intersectionObserver.observe(host);
  document.addEventListener("visibilitychange", onVisibility);

  kick();

  return () => {
    cancelAnimationFrame(raf);
    intersectionObserver.disconnect();
    resizeObserver.disconnect();
    document.removeEventListener("visibilitychange", onVisibility);
    window.removeEventListener("pointermove", onPointerMove);

    pointGeometry.dispose();
    pointMaterial.dispose();
    pointTexture?.dispose();
    lineGeometry.dispose();
    lineMaterial.dispose();
    ringA.geometry.dispose();
    (ringA.material as THREE.Material).dispose();
    ringB.geometry.dispose();
    (ringB.material as THREE.Material).dispose();

    renderer.dispose();
    renderer.domElement.remove();
  };
}

function makePointTexture(THREE: ThreeModule) {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  if (!context) return null;

  const gradient = context.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  );
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.35, "rgba(255,255,255,0.85)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeRing(
  THREE: ThreeModule,
  radius: number,
  color: string,
  opacity: number,
) {
  const points: THREE.Vector3[] = [];
  const segments = 160;
  for (let i = 0; i < segments; i += 1) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(
      new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius),
    );
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  return new THREE.LineLoop(geometry, material);
}
