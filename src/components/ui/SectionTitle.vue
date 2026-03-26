<template>
  <div class="reveal-item">
    <p
      v-if="eyebrow"
      class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400"
    >
      {{ eyebrow }}
    </p>
    <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl">{{ title }}</h2>
    <p
      v-if="description"
      class="max-w-4xl text-base leading-8 text-slate-400 sm:text-lg"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  eyebrow?: string;
  description?: string;
}>();
</script>
