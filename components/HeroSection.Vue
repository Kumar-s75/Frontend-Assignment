<template>
  <section class="relative isolate" style="min-height:1177px;background:linear-gradient(180deg,#42389E 0%, #42389E 30%, #2F2E68 60%, #0F1026 100%);">
    <!-- Background Vector disabled to avoid prod asset race; gradient ensures visibility -->
    <div v-if="false" class="absolute inset-0 z-0 pointer-events-none">
      <img src="/images/hero-background.svg" alt="Background" class="block w-full h-full object-cover" />
    </div>
    <!-- Bottom-right diagonal wedge to match Figma -->
    <div class="absolute bottom-0 right-0 w-full z-0" style="height:420px; background:#ffffff; clip-path: polygon(62% 0, 100% 16%, 100% 100%, 0% 100%, 0% 64%);"></div>

    <div class="relative max-w-[1920px] mx-auto px-[120px] z-10">
      <div class="flex flex-col gap-[141px] items-center pt-[154.2px]">
        <div class="relative w-[1040px] h-[460px]">
          <HeroContent />
        </div>
        <HeroCard />
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroContent from './HeroContent.vue'
import HeroCard from './HeroCard.vue'
</script>