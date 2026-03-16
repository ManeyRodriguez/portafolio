<template>
  <section
    id="inicio"
    ref="sectionRef"
    class="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]"
  >
    <div
      class="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,420px)] md:items-center lg:px-8 lg:py-28"
    >
      <div>
        <p class="hero-item mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
          Portafolio profesional
        </p>

        <h1 class="hero-item mb-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
          {{ portfolioData.name }}
        </h1>

        <p class="hero-item mb-4 text-lg font-semibold text-cyan-400 sm:text-xl">
          {{ portfolioData.role }}
        </p>

        <p class="hero-item mb-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          {{ portfolioData.summary }}
        </p>

        <div class="hero-item mb-8">
          <span
            class="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
          >
            {{ portfolioData.location }}
          </span>
        </div>

        <div class="hero-item flex flex-wrap gap-4">
          <a
            href="#proyectos"
            class="inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-400 px-6 text-sm font-bold text-slate-950 transition hover:scale-[1.03] hover:bg-cyan-300"
          >
            Ver proyectos
          </a>

          <a
            href="#contacto"
            class="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-6 text-sm font-bold text-white transition hover:scale-[1.03] hover:border-cyan-400 hover:text-cyan-400"
          >
            Contáctame
          </a>
        </div>
      </div>

      <div class="hero-image flex justify-center md:justify-end">
        <img
          :src="portfolioData.profileImage"
          :alt="`Foto de ${portfolioData.name}`"
          class="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 object-contain shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { portfolioData } from '../../data/portfolio';
import { gsap } from '../../lib/gsap';

const sectionRef = ref<HTMLElement | null>(null);
let ctx: gsap.Context | null = null;

onMounted(() => {
  const root = sectionRef.value;
  if (!root) return;

  ctx = gsap.context(() => {
    gsap.from('.hero-item', {
      opacity: 0,
      y: 28,
      duration: 0.85,
      stagger: 0.12,
      ease: 'power3.out',
    });

    gsap.from('.hero-image', {
      opacity: 0,
      x: 32,
      scale: 0.96,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
    });
  }, root);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>