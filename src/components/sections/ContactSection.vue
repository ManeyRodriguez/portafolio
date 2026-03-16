<template>
  <section id="contacto" class="section section--muted">
    <div class="container">
      <SectionTitle
        eyebrow="Contacto"
        title="Hablemos"
        description="Si quieres colaborar, trabajar conmigo o conocer más sobre mis proyectos, aquí puedes encontrarme."
      />

      <div class="contact-card">
        <a :href="`mailto:${portfolioData.contact.email}`" class="contact-link">
          {{ portfolioData.contact.email }}
        </a>

        <a
          :href="portfolioData.contact.github"
          target="_blank"
          rel="noreferrer"
          class="contact-link"
        >
          GitHub
        </a>

        <a
          :href="portfolioData.contact.linkedin"
          target="_blank"
          rel="noreferrer"
          class="contact-link"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle.vue';
</script>