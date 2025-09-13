<template>
  <section class="relative isolate" style="min-height:1177px;background:linear-gradient(180deg,#42389e 0%,#0f1026 100%);">
    <!-- Background Vector -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <img src="/images/hero-background.svg" alt="Background" class="block w-full h-full object-cover" />
    </div>

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
</script>