<script setup>
import { onMounted, ref, computed } from 'vue';

const prefersLightMode = computed(() => document.body.getAttribute('data-theme') === 'light');
const backgroundRef = ref(null);
const dots = [];
const DOT_COUNT = 250; // Amount of dots on screen
const MAX_DISTANCE = 100; // Maximum distance to connect dots
const SPEED = 0.5; // Speed of dot movement
var ctx = null; // Global context for the background.

// Resize canvas background.
function resizeBackground() {
    if (backgroundRef.value?.width && backgroundRef.value?.height) {
        backgroundRef.value.width = window.innerWidth - 10;
        backgroundRef.value.height = window.innerHeight;
    }
}

// Initialize dots with random positions and velocities
function initBackgroundDots() {
    for (let i = 0; i < DOT_COUNT; i++) {
        dots.push({
            x: Math.random() * backgroundRef.value.width,
            y: Math.random() * backgroundRef.value.height,
            vx: (Math.random() - 0.5) * SPEED,
            vy: (Math.random() - 0.5) * SPEED
        });
    }
}

// Animation loop
function initAnimation() {
    if (backgroundRef.value?.width && backgroundRef.value?.height) {
        ctx.clearRect(0, 0, backgroundRef.value.width, backgroundRef.value.height);
        
        // Draw dots and lines
        for (let i = 0; i < DOT_COUNT; i++) {
            const dot = dots[i];
            
            // Move the dot
            dot.x += dot.vx;
            dot.y += dot.vy;
            
            // Bounce off the edges
            if (dot.x <= 0 || dot.x >= backgroundRef.value?.width) dot.vx *= -1;
            if (dot.y <= 0 || dot.y >= backgroundRef.value?.height) dot.vy *= -1;

            // Draw the dot
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = prefersLightMode.value ? '#000000' : '#ffffff';
            ctx.fill();
            
            // Draw lines between dots that are close enough
            for (let j = i + 1; j < DOT_COUNT; j++) {
                const otherDot = dots[j];
                const dx = dot.x - otherDot.x;
                const dy = dot.y - otherDot.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < MAX_DISTANCE) {
                    ctx.beginPath();
                    ctx.moveTo(dot.x, dot.y);
                    ctx.lineTo(otherDot.x, otherDot.y);
                    ctx.strokeStyle = `rgba(${prefersLightMode.value ? '0, 0, 0' : '255, 255, 255'}, ${1 - distance / MAX_DISTANCE})`; // Fade based on distance
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }
    
    requestAnimationFrame(initAnimation);
}

// Initialize the canvas size on load and resize
window.addEventListener('resize', resizeBackground);

// Start the animation and init the background.
onMounted(() => {
    // Attach the background to the body so that it can be behind the content.
    document.body.appendChild(backgroundRef.value);
    ctx = backgroundRef.value?.getContext('2d');

    // Init the background
    resizeBackground();
    initBackgroundDots();
    initAnimation();
});
</script>

<template>
    <canvas ref="backgroundRef" class="background"></canvas>
</template>

<style lang="less" scoped>
.background {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
}

@media screen and (max-width: @breakpoint-mobile) {
  .background {
    display: none;
  }
}
</style>