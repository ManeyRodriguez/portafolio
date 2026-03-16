<template>
  <section id="sobre-mi" class="section">
    <div class="container">
      <SectionTitle
        eyebrow="Sobre mí"
        title="Desarrollo soluciones modernas y funcionales"
        description="Una base clara sobre quién soy, cómo trabajo y qué valor aporto."
      />

      <div class="about-card">
        <p class="about-card__text">
          {{ portfolioData.about }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle.vue';
</script>