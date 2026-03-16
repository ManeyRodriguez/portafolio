<template>
  <section id="proyectos" ref="sectionRef" class="bg-slate-950 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-10">
        <p class="projects-heading mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
          Proyectos
        </p>

        <h2 class="projects-heading mb-4 text-3xl font-bold text-white sm:text-4xl">
          Trabajos destacados
        </h2>

        <p class="projects-heading max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
          Proyectos que representan bien mi perfil técnico y el tipo de soluciones que puedo construir.
        </p>
      </div>

      <div ref="cardsWrapper" class="grid gap-6 lg:grid-cols-2">
        <article
          v-for="project in portfolioData.projects"
          :key="project.title"
          class="project-card overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
        >
          <div class="flex h-60 items-center justify-center overflow-hidden bg-slate-900">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
            />

            <div
              v-else
              class="flex h-full w-full items-center justify-center text-lg font-bold text-slate-400"
            >
              {{ project.title }}
            </div>
          </div>

          <div class="p-6">
            <h3 class="mb-3 text-2xl font-bold text-white">
              {{ project.title }}
            </h3>

            <p class="mb-5 text-base leading-7 text-slate-300">
              {{ project.description }}
            </p>

            <div class="mb-5 flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="`${project.title}-${tech}`"
                class=" rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-300 sm:text-sm"
              >
               <i :class="iconSkills[tech]" />
                {{ tech }}
              </span>
            </div>

            <div class="flex flex-wrap gap-4">
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                rel="noreferrer"
                class="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                <i class="fas fa-external-link-alt mr-2 text-cyan-400"></i>
                Ver proyecto
              </a>

              <a
                v-if="project.repoUrl"
                :href="project.repoUrl"
                target="_blank"
                rel="noreferrer"
                class="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Código
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { iconSkills, portfolioData } from '../../data/portfolio';
import { gsap } from '../../lib/gsap';

const sectionRef = ref<HTMLElement | null>(null);
const cardsWrapper = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;

onMounted(() => {
  const root = sectionRef.value;
  const wrapper = cardsWrapper.value;

  if (!root || !wrapper) return;

  ctx = gsap.context(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.project-card');

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: 'top 75%',
        toggleActions: 'play none none none',
        once: true,
      },
    });

    timeline.from('.projects-heading', {
      opacity: 0,
      y: 26,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      clearProps: 'all',
    });

    timeline.from(
      cards,
      {
        opacity: 0,
        y: 32,
        duration: 0.75,
        stagger: 0.14,
        ease: 'power3.out',
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