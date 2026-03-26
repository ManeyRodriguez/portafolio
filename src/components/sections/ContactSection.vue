<template>
  <section id="contacto" ref="sectionRef" class="bg-slate-900/70 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        class="mb-10"
        eyebrow="Contacto"
        title="Hablemos"
        description="Si quieres colaborar, trabajar conmigo o conocer más sobre mis proyectos, aquí puedes encontrarme."
      />

      <div
        class="reveal-item rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl"
      >
        <div class="flex flex-wrap gap-4">
          <a
            :href="`mailto:${portfolioData.contact.email}`"
            class="inline-flex items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-400/15"
          >
            <AppIcon name="contact" class="mr-2 h-4 w-4 text-cyan-400" />
            {{ portfolioData.contact.email }}
          </a>

          <a
            :href="portfolioData.contact.github"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-400/15"
          >
            <AppIcon name="github" class="mr-2 h-4 w-4 text-cyan-400" />
            GitHub
          </a>

          <a
            :href="portfolioData.contact.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-400/15"
          >
            <AppIcon name="linkedin" class="mr-2 h-4 w-4 text-cyan-400" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppIcon from '../ui/AppIcon.vue';
import SectionTitle from '../ui/SectionTitle.vue';
import { portfolioData } from '../../data/portfolio';
import { useSectionReveal } from '../../composables/useSectionReveal';

const sectionRef = ref<HTMLElement | null>(null);

useSectionReveal(sectionRef);
</script>
