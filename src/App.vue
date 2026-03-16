<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <AppHeader />

    <main>
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