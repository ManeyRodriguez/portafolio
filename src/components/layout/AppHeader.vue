<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
    <div
      class="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between"
    >
      <!-- Top bar -->
      <div class="flex items-center justify-between">
        <a
          href="#inicio"
          class="text-left text-lg font-extrabold tracking-[0.2em] text-white"
        >
          <i class="fas fa-code mr-2 text-cyan-400"></i>
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
          @click="menuOpen = !menuOpen"
          aria-label="Abrir menú"
        >
          <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-lg text-cyan-400"></i>
        </button>
      </div>

      <!-- Navegación -->
      <nav
        :class="[
          menuOpen ? 'flex' : 'hidden',
          'flex-col gap-3 md:flex md:flex-row md:items-center md:gap-6'
        ]"
      >
        <a
          href="#inicio"
          class="rounded-lg px-2 py-1 text-sm font-medium text-white transition hover:text-cyan-400"
          @click="menuOpen = false"
        >
          <i class="fas fa-home mr-1 text-cyan-400"></i>
          Inicio
        </a>

        <a
          href="#sobre-mi"
          class="rounded-lg px-2 py-1 text-sm font-medium text-white transition hover:text-cyan-400"
          @click="menuOpen = false"
        >
          <i class="fas fa-user mr-1 text-cyan-400"></i>
          Sobre mí
        </a>

        <a
          href="#habilidades"
          class="rounded-lg px-2 py-1 text-sm font-medium text-white transition hover:text-cyan-400"
          @click="menuOpen = false"
        >
          <i class="fas fa-cogs mr-1 text-cyan-400"></i>
          Tecnologías
        </a>

        <a
          href="#proyectos"
          class="rounded-lg px-2 py-1 text-sm font-medium text-white transition hover:text-cyan-400"
          @click="menuOpen = false"
        >
          <i class="fas fa-briefcase mr-1 text-cyan-400"></i>
          Proyectos
        </a>

        <a
          href="#contacto"
          class="rounded-lg px-2 py-1 text-sm font-medium text-white transition hover:text-cyan-400"
          @click="menuOpen = false"
        >
          <i class="fas fa-envelope mr-1 text-cyan-400"></i>
          Contacto
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { portfolioData } from '../../data/portfolio';

const menuOpen = ref(false);
</script>