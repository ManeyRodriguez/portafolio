<template>
  <section id="habilidades" class="section section--muted">
    <div class="container">
      <SectionTitle
        eyebrow="Tecnologías"
        title="Stack técnico"
        description="Tecnologías y herramientas con las que construyo productos y soluciones."
      />

      <div class="chips">
        <span
          v-for="skill in portfolioData.skills"
          :key="skill"
          class="chip"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle.vue';
</script>