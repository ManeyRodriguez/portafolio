<template>
  <svg
    :class="customClass"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.9"
    aria-hidden="true"
  >
    <path
      v-for="(segment, index) in icon.paths"
      :key="`${name}-${index}`"
      :d="segment"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  name:
    | 'briefcase'
    | 'close'
    | 'code'
    | 'contact'
    | 'external-link'
    | 'github'
    | 'home'
    | 'linkedin'
    | 'location'
    | 'menu'
    | 'stack'
    | 'user';
  class?: string;
}>();

const icons = {
  briefcase: {
    paths: [
      'M3 8.5h18',
      'M8 8.5V6.75A1.75 1.75 0 0 1 9.75 5h4.5A1.75 1.75 0 0 1 16 6.75V8.5',
      'M5.25 8.5h13.5A2.25 2.25 0 0 1 21 10.75v7A2.25 2.25 0 0 1 18.75 20h-13.5A2.25 2.25 0 0 1 3 17.75v-7A2.25 2.25 0 0 1 5.25 8.5',
    ],
  },
  close: {
    paths: ['M6 6l12 12', 'M18 6 6 18'],
  },
  code: {
    paths: ['m8 8-4 4 4 4', 'm16 8 4 4-4 4', 'm14.5 4-5 16'],
  },
  contact: {
    paths: [
      'M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25Z',
      'm5.5 7.5 6.5 5 6.5-5',
    ],
  },
  'external-link': {
    paths: [
      'M14 5h5v5',
      'M10 14 19 5',
      'M19 13v4.25A1.75 1.75 0 0 1 17.25 19H6.75A1.75 1.75 0 0 1 5 17.25V6.75A1.75 1.75 0 0 1 6.75 5H11',
    ],
  },
  github: {
    paths: [
      'M9 19c-4.5 1.5-4.5-2.5-6.5-3',
      'M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.53c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
    ],
  },
  home: {
    paths: [
      'm3 11.5 9-7 9 7',
      'M5.5 10.5v8.25A1.25 1.25 0 0 0 6.75 20h10.5a1.25 1.25 0 0 0 1.25-1.25V10.5',
      'M10 20v-5.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V20',
    ],
  },
  linkedin: {
    paths: [
      'M7 9v8',
      'M7 6.5h.01',
      'M11 9v8',
      'M11 12a3 3 0 0 1 6 0v5',
      'M5.75 3.5h12.5A2.25 2.25 0 0 1 20.5 5.75v12.5a2.25 2.25 0 0 1-2.25 2.25H5.75A2.25 2.25 0 0 1 3.5 18.25V5.75A2.25 2.25 0 0 1 5.75 3.5',
    ],
  },
  location: {
    paths: [
      'M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z',
      'M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
    ],
  },
  menu: {
    paths: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  },
  stack: {
    paths: ['m12 4 8 4-8 4-8-4 8-4Z', 'm4 12 8 4 8-4', 'm4 16 8 4 8-4'],
  },
  user: {
    paths: [
      'M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z',
      'M5.5 19a6.5 6.5 0 0 1 13 0',
    ],
  },
} as const;

const icon = computed(() => icons[props.name]);
const customClass = computed(() => props.class ?? 'h-5 w-5');
</script>
