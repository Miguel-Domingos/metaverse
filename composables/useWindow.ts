import { ref, onMounted, onBeforeUnmount } from "vue";
export function useWindow() {
  const Width = ref(0);
  const Height = ref(0);
  if (process.client) {
    function onResize() {
      Width.value = window.innerWidth;
      Height.value = window.innerHeight;
    }

    onMounted(() => {
      onResize();
      window.addEventListener("resize", onResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", onResize);
    });
  }
  return {
    Width,
    Height,
  };
}
