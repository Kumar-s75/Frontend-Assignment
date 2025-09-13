<template>
  <section id="hero-diag" class="relative isolate" style="min-height:1177px;background:linear-gradient(180deg,#42389E 0%, #42389E 30%, #2F2E68 60%, #0F1026 100%); outline: 4px solid rgba(255,0,128,0.6);">
    <!-- Background Vector (temporarily disabled for diagnostics) -->
    <div v-if="false" class="absolute inset-0 z-0 pointer-events-none">
      <img src="/images/hero-background.svg" alt="Background" class="block w-full h-full object-cover" />
    </div>
    <!-- Diagnostics badge -->
    <div class="absolute top-3 left-3 z-50 text-white text-sm bg-black/60 px-2 py-1 rounded">HERO DIAG</div>

    <!-- Content -->
    <div class="relative max-w-[1920px] mx-auto px-[120px] z-10">
      <div class="flex flex-col gap-[141px] items-center pt-[154.2px]">
        <!-- Hero Content Component -->
        <div class="relative w-[1040px] h-[460px]">
          <HeroContent />
        </div>

        <!-- Hero Card Component -->
        <HeroCard />
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroContent from './HeroContent.vue'
import HeroCard from './HeroCard.vue'
import { onMounted, onServerPrefetch } from 'vue'

onServerPrefetch(() => {
  // SSR diagnostics
  console.info('[DIAG][SSR] rendering HeroSection')
})

onMounted(() => {
  // eslint-disable-next-line no-console
  console.log('[DIAG] HeroSection mounted. Element:', document.getElementById('hero-diag'))
})
</script>