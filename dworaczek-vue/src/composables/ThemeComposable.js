import { ref, onMounted, onUnmounted } from 'vue';

/**
 * useThemeMode
 * Reactive dark/light mode tracker based on `document.body.dataset.theme`
 * 
 * Returns a `ref` that updates when `data-theme` changes on `<body>`.
 */
export function useThemeMode() {
  const prefersLightMode = ref(document.body.getAttribute('data-theme') === 'light');
  let observer = null;

  const updateTheme = () => {
    prefersLightMode.value = document.body.getAttribute('data-theme') === 'light';
  };

  onMounted(() => {
    updateTheme();

    observer = new MutationObserver(() => {
      updateTheme();
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  return { prefersLightMode };
}
