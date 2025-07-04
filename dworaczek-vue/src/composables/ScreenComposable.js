import { ref, onMounted, onUnmounted, computed } from 'vue';

export function useScreenSize() {
  const screenSize = ref(getCurrentScreenSize());

  function getCurrentScreenSize() {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1280) return 'tablet';
    return 'desktop';
  }

  function handleResize() {
    screenSize.value = getCurrentScreenSize();
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  return {
    screenSize,
    isMobile: computed(() => screenSize.value === 'mobile'),
    isTablet: computed(() => screenSize.value === 'tablet'),
    isDesktop: computed(() => screenSize.value === 'desktop'),
  };
}
