<template>
  <footer
    ref="footerRef"
    class="border-t border-cyan-400/10 bg-slate-900"
  >
    <div
      class="mx-auto flex max-w-7xl items-center justify-center px-4 py-8 text-center text-sm text-slate-300 sm:px-6 lg:px-8"
    >
      © 2026 Juan Manuel Rodríguez. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { gsap } from '../../lib/gsap';

const footerRef = ref<HTMLElement | null>(null);
let ctx: gsap.Context | null = null;

onMounted(() => {
  if (!footerRef.value) return;

  ctx = gsap.context(() => {
    gsap.from(footerRef.value, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.value,
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
    });
  }, footerRef.value);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>