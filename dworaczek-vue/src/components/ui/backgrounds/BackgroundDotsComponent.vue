<template>
  <canvas ref="backgroundRef" class="background"></canvas>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useThemeMode } from '@/composables/ThemeComposable';

const { prefersLightMode } = useThemeMode();
const backgroundRef = ref(null);

const DOT_COUNT = 250;
const MAX_DISTANCE = 100;
const SPEED = 0.5;

let dots = [];
let ctx = null;
let animationFrameId = null;

// Resize canvas to full viewport
function resizeBackground() {
  if (!backgroundRef.value) return;
  backgroundRef.value.width = window.innerWidth;
  backgroundRef.value.height = window.innerHeight;
}

// Initialize dots with random positions and velocities
function initBackgroundDots() {
  dots = Array.from({ length: DOT_COUNT }, () => ({
    x: Math.random() * backgroundRef.value.width,
    y: Math.random() * backgroundRef.value.height,
    vx: (Math.random() - 0.5) * SPEED,
    vy: (Math.random() - 0.5) * SPEED,
  }));
}

// Animation loop
function animate() {
  if (!ctx || !backgroundRef.value) return;

  const width = backgroundRef.value.width;
  const height = backgroundRef.value.height;

  ctx.clearRect(0, 0, width, height);

  // Draw dots and lines
  for (let i = 0; i < DOT_COUNT; i++) {
    const dot = dots[i];

    // Move dot
    dot.x += dot.vx;
    dot.y += dot.vy;

    // Bounce off edges
    if (dot.x <= 0 || dot.x >= width) dot.vx *= -1;
    if (dot.y <= 0 || dot.y >= height) dot.vy *= -1;

    // Draw dot
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = prefersLightMode.value ? '#000' : '#fff';
    ctx.fill();

    // Draw lines to close dots
    for (let j = i + 1; j < DOT_COUNT; j++) {
      const otherDot = dots[j];
      const dx = dot.x - otherDot.x;
      const dy = dot.y - otherDot.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MAX_DISTANCE) {
        ctx.beginPath();
        ctx.moveTo(dot.x, dot.y);
        ctx.lineTo(otherDot.x, otherDot.y);
        const alpha = 1 - dist / MAX_DISTANCE;
        const color = prefersLightMode.value ? `rgba(0,0,0,${alpha})` : `rgba(255,255,255,${alpha})`;
        ctx.strokeStyle = color;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  animationFrameId = requestAnimationFrame(animate);
}

onMounted(() => {
  if (!backgroundRef.value) return;

  // Get context
  ctx = backgroundRef.value.getContext('2d');

  // Set initial size and dots
  resizeBackground();
  initBackgroundDots();

  // Start animation
  animate();

  // Listen for resize events to update canvas size and dots
  window.addEventListener('resize', resizeBackground);
});

onBeforeUnmount(() => {
  // Cleanup animation and event listener
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  window.removeEventListener('resize', resizeBackground);
});
</script>

<style scoped lang="less">
.background {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none; /* Ensure canvas doesn't block interactions */
}
</style>
