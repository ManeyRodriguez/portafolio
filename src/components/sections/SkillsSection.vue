<template>
  <section id="habilidades" ref="sectionRef" class="bg-slate-900/70 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        class="mb-10 skills-heading"
        eyebrow="Tecnologías"
        title="Stack técnico"
        description="Herramientas y tecnologías con las que construyo interfaces, servicios y soluciones empresariales."
      />

      <div ref="chipsWrapper" class="flex flex-wrap gap-3">
        <span
          v-for="skill in portfolioData.skills"
          :key="skill"
          class="skill-chip inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/15"
        >
          <span class="h-2 w-2 rounded-full bg-cyan-300"></span>
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import SectionTitle from '../ui/SectionTitle.vue';
import { portfolioData } from '../../data/portfolio';
import { gsap } from '../../lib/gsap';

const sectionRef = ref<HTMLElement | null>(null);
const chipsWrapper = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;

onMounted(() => {
  const root = sectionRef.value;
  const wrapper = chipsWrapper.value;

  if (!root || !wrapper) return;

  ctx = gsap.context(() => {
    const chips = gsap.utils.toArray<HTMLElement>('.skill-chip');

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: 'top 78%',
        toggleActions: 'play none none none',
        once: true,
      },
    });

    timeline.from('.skills-heading', {
      opacity: 0,
      y: 24,
      duration: 0.75,
      stagger: 0.1,
      ease: 'power3.out',
      clearProps: 'all',
    });

    timeline.from(
      chips,
      {
        opacity: 0,
        y: 14,
        scale: 0.96,
        duration: 0.35,
        stagger: 0.035,
        ease: 'power2.out',
        clearProps: 'all',
      },
      '-=0.2',
    );
  }, root);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>
