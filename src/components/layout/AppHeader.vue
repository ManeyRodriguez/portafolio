<template>
  <header
    class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur"
  >
    <div
      class="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between"
    >
      <div class="flex items-center justify-between">
        <a
          href="#inicio"
          class="inline-flex items-center gap-3 text-left text-lg font-extrabold tracking-[0.2em] text-white transition hover:text-cyan-300"
        >
          <span
            class="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
          >
            <AppIcon name="code" class="h-5 w-5" />
          </span>
          {{
            portfolioData.abreviatedName ||
            portfolioData.name
              .split(' ')
              .map((n) => n[0])
              .join('')
          }}
        </a>

        <!-- Botón burger solo en mobile -->
        <button
          type="button"
          class="ml-4 inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white transition hover:bg-white/10 md:hidden"
          :aria-expanded="menuOpen"
          :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
          aria-controls="site-nav"
          @click="menuOpen = !menuOpen"
        >
          <AppIcon
            :name="menuOpen ? 'close' : 'menu'"
            class="h-5 w-5 text-cyan-300"
          />
        </button>
      </div>

      <nav
        id="site-nav"
        :class="[
          menuOpen ? 'flex' : 'hidden',
          'flex-col gap-3 md:flex md:flex-row md:items-center md:gap-6',
        ]"
      >
        <a
          href="#inicio"
          class="rounded-lg px-2 py-1 text-sm font-medium text-white transition hover:text-cyan-400"
          @click="menuOpen = false"
        >
          <AppIcon name="home" class="mr-1 inline h-4 w-4 text-cyan-400" />
          Inicio
        </a>

        <a
          href="#sobre-mi"
          class="rounded-lg px-2 py-1 text-sm font-medium text-white transition hover:text-cyan-400"
          @click="menuOpen = false"
        >
          <AppIcon name="user" class="mr-1 inline h-4 w-4 text-cyan-400" />
          Sobre mí
        </a>

        <a
          href="#habilidades"
          class="rounded-lg px-2 py-1 text-sm font-medium text-white transition hover:text-cyan-400"
          @click="menuOpen = false"
        >
          <AppIcon name="stack" class="mr-1 inline h-4 w-4 text-cyan-400" />
          Tecnologías
        </a>

        <a
          href="#proyectos"
          class="rounded-lg px-2 py-1 text-sm font-medium text-white transition hover:text-cyan-400"
          @click="menuOpen = false"
        >
          <AppIcon name="briefcase" class="mr-1 inline h-4 w-4 text-cyan-400" />
          Proyectos
        </a>

        <a
          href="#contacto"
          class="rounded-lg px-2 py-1 text-sm font-medium text-white transition hover:text-cyan-400"
          @click="menuOpen = false"
        >
          <AppIcon name="contact" class="mr-1 inline h-4 w-4 text-cyan-400" />
          Contacto
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import AppIcon from '../ui/AppIcon.vue';
import { portfolioData } from '../../data/portfolio';

const menuOpen = ref(false);

const handleKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'Escape') {
    menuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>
