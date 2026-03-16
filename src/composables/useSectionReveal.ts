import { onBeforeUnmount, onMounted, type Ref } from 'vue';
import { gsap } from '../lib/gsap';

type UseSectionRevealOptions = {
  selector?: string;
  start?: string;
  y?: number;
  duration?: number;
  stagger?: number;
};

export const useSectionReveal = (
  sectionRef: Ref<HTMLElement | null>,
  options?: UseSectionRevealOptions,
): void => {
  let ctx: gsap.Context | null = null;

  onMounted(() => {
    const root = sectionRef.value;
    if (!root) return;

    const {
      selector = '.reveal-item',
      start = 'top 80%',
      y = 28,
      duration = 0.8,
      stagger = 0.12,
    } = options ?? {};

    ctx = gsap.context(() => {
      gsap.from(selector, {
        opacity: 0,
        y,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root,
          start,
          toggleActions: 'play none none none',
        },
      });
    }, root);
  });

  onBeforeUnmount(() => {
    ctx?.revert();
  });
};