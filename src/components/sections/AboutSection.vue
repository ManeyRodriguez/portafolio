<template>
  <section id="sobre-mi" ref="sectionRef" class="bg-slate-950 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-10">
        <p class="reveal-item mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
          
          Sobre mí
        </p>

        <h2 class="reveal-item mb-4 text-3xl font-bold text-white sm:text-4xl">
          Desarrollo soluciones modernas y funcionales
        </h2>

        <p class="reveal-item max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
          Una visión clara de quién soy, cómo trabajo y el tipo de valor que aporto.
        </p>
      </div>

      <div class="reveal-item rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl sm:p-8">
        <p class="text-base leading-8 text-slate-300 sm:text-lg text-justify">
          {{ portfolioData.about }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { portfolioData } from '../../data/portfolio';
import { useSectionReveal } from '../../composables/useSectionReveal';

const sectionRef = ref<HTMLElement | null>(null);

useSectionReveal(sectionRef);
</script>