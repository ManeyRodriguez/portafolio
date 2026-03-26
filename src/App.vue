<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <a
      href="#contenido"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
    >
      Saltar al contenido
    </a>

    <AppHeader />

    <main id="contenido">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from './components/layout/AppFooter.vue';
import AppHeader from './components/layout/AppHeader.vue';
import AboutSection from './components/sections/AboutSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import HeroSection from './components/sections/HeroSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
</script>
