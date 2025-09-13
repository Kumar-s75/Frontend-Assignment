<template>
  <section class="py-[120px] bg-accent">
    <div class="max-w-[1920px] mx-auto px-[120px]">
      <div class="grid lg:grid-cols-2 items-center" style="grid-column-gap:120px;">
        <!-- Left visual card -->
        <div class="bg-white rounded-[12px] p-[77px] shadow-[0px_0px_10px_10px_rgba(0,0,0,0.05)] border border-[#42389e]/50 h-[618px] flex items-center justify-center">
          <img src="/images/openfeature-logo.png" alt="OpenFeature" class="w-[362px] h-[183px] object-contain" />
        </div>
        <!-- Right copy -->
        <div class="w-[575px]">
          <h3 class="font-body text-[32px] font-semibold text-dark mb-4 leading-none">Seamless Feature Management with OpenFeature</h3>
          <p class="font-body text-[18px] text-[#5F5F60] mb-8 leading-none">
            Aortem now integrates with OpenFeature to provide developers with a powerful, standardized approach to feature flagging and dynamic configuration. Ship features faster, test safely, and optimize user experiences effortlessly.
          </p>
          <Button variant="secondary" size="md">Learn More</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from './Button.vue'
</script>
