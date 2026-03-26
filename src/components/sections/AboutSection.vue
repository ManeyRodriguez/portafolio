<template>
  <section id="sobre-mi" ref="sectionRef" class="bg-slate-950 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        class="mb-10"
        eyebrow="Sobre mí"
        title="Desarrollo soluciones modernas y funcionales"
        description="Una visión clara de quién soy, cómo trabajo y el tipo de valor que aporto."
      />

      <div
        class="reveal-item rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl sm:p-8"
      >
        <p class="text-base leading-8 text-slate-300 sm:text-lg text-justify">
          {{ portfolioData.about }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SectionTitle from '../ui/SectionTitle.vue';
import { portfolioData } from '../../data/portfolio';
import { useSectionReveal } from '../../composables/useSectionReveal';

const sectionRef = ref<HTMLElement | null>(null);

useSectionReveal(sectionRef);
</script>
