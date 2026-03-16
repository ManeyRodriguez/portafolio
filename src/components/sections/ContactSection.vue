<template>
  <section id="contacto" ref="sectionRef" class="bg-slate-900/70 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-10">
        <p class="reveal-item mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
          Contacto
        </p>

        <h2 class="reveal-item mb-4 text-3xl font-bold text-white sm:text-4xl">
          Hablemos
        </h2>

        <p class="reveal-item max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
          Si quieres colaborar, trabajar conmigo o conocer más sobre mis proyectos, aquí puedes encontrarme.
        </p>
      </div>

      <div class="reveal-item rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
        <div class="flex flex-wrap gap-4">
          <a
            :href="`mailto:${portfolioData.contact.email}`"
            class=" rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-400/15"
          >
          <i class="fas fa-envelope mr-2 text-cyan-400"></i>
            {{ portfolioData.contact.email }}
          </a>

          <a
            :href="portfolioData.contact.github"
            target="_blank"
            rel="noreferrer"
            class=" rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-400/15"
          >
          <i class="fab fa-github mr-2 text-cyan-400"></i>
            GitHub
          </a>

          <a
            :href="portfolioData.contact.linkedin"
            target="_blank"
            rel="noreferrer"
            class="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-400/15"
          >
          <i class="fab fa-linkedin mr-2 text-cyan-400"></i>
            LinkedIn
          </a>
        </div>
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