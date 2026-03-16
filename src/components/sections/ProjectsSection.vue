<template>
  <section id="proyectos" class="section">
    <div class="container">
      <SectionTitle
        eyebrow="Proyectos"
        title="Algunos trabajos destacados"
        description="Ejemplos de soluciones en las que he trabajado o que representan bien mi perfil técnico."
      />

      <div class="grid">
        <article
          v-for="project in portfolioData.projects"
          :key="project.title"
          class="card"
        >
          <div class="card__image">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
            />
            <div v-else class="card__image-placeholder">
              {{ project.title }}
            </div>
          </div>

          <div class="card__body">
            <h3 class="card__title">{{ project.title }}</h3>
            <p class="card__text">{{ project.description }}</p>

            <div class="chips chips--small">
              <span
                v-for="tech in project.technologies"
                :key="`${project.title}-${tech}`"
                class="chip"
              >
                {{ tech }}
              </span>
            </div>

            <div class="card__actions">
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                class="link"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>

              <a
                v-if="project.repoUrl"
                :href="project.repoUrl"
                class="link"
                target="_blank"
                rel="noreferrer"
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
import { portfolioData } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle.vue';
</script>