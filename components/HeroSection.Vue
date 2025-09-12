<template>
  <section class="relative">
    <!-- Background Vector -->
    <div class="absolute left-0 top-0 w-full h-[1177px] sm:h-[900px]">
      <img src="/images/hero-background.svg" alt="Background" class="block max-w-none size-full" />
    </div>

    <!-- Content -->
    <div class="relative max-w-[1920px] mx-auto px-[120px] xl:px-[120px] lg:px-[80px] sm:px-6">
      <div class="flex flex-col gap-[141px] items-center pt-[154.2px] sm:pt-[120px]">
        <!-- Hero Content Component -->
        <div class="relative w-[1040px] h-[460px] xl:w-[1040px] lg:w-[960px] sm:w-full sm:h-auto">
          <HeroContent />
        </div>

        <!-- Hero Card Component -->
        <div class="sm:w-full">
          <HeroCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroContent from './HeroContent.vue'
import HeroCard from './HeroCard.vue'
</script>