<template>
  <section class="relative bg-gradient-to-b from-[#42389e] to-[#0f1026]">
    <!-- Background Vector -->
    <div class="absolute h-[1177px] left-0 top-0 w-full">
      <img src="/images/hero-background.svg" alt="Background" class="block max-w-none size-full" />
    </div>

    <!-- Content -->
    <div class="relative max-w-[1920px] mx-auto px-[120px]">
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