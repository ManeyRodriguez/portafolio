<template>
  <section id="inicio" class="section hero">
    <div class="container hero__layout">
      <div class="hero__content">
        <p class="hero__eyebrow">Portafolio profesional</p>

        <h1 class="hero__title">
          {{ portfolioData.name }}
        </h1>

        <p class="hero__role">
          {{ portfolioData.role }}
        </p>

        <p class="hero__description">
          {{ portfolioData.summary }}
        </p>

        <div class="hero__meta">
          <span>{{ portfolioData.location }}</span>
        </div>

        <div class="hero__actions">
          <a href="#proyectos" class="button button--primary">Ver proyectos</a>
          <a href="#contacto" class="button button--secondary">Contáctame</a>
        </div>
      </div>

      <div class="hero__image-wrapper">
        <img
          :src="portfolioData.profileImage"
          :alt="`Foto de ${portfolioData.name}`"
          class="hero__image"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '../../data/portfolio';
</script>