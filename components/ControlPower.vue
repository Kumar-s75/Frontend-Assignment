<template>
  <section class="py-[120px] bg-white">
    <div class="max-w-[1920px] mx-auto px-[120px] lg:px-[80px] sm:px-6">
      <!-- Section Title -->
      <div class="mb-[54px]">
        <h2 class="text-center text-[40px] font-bold text-transparent bg-clip-text text-gradient-hero">Control & Power-focused</h2>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[95px] sm:grid-cols-1">
        <!-- Connect -->
        <div>
          <div class="rounded-[12px] bg-[#1A1C3D] p-2 shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] border border-[#42389e]/50">
            <img src="/images/tile-connect.png" alt="Connect visual" class="w-full rounded-[8px]" />
          </div>
          <div class="pt-6">
            <h3 class="font-sans text-[24px] font-semibold text-[#1a1c3d] mb-2">Connect</h3>
            <p class="font-body text-[18px] text-[#5F5F60] mb-6">Install SDK in your Dart project in 2 mins.</p>
            <Button variant="outline" class="border-[#F9A71E] text-[#F9A71E] hover:bg-[#F9A71E]/10">View Documentation</Button>
          </div>
        </div>
        <!-- Create Flags -->
        <div>
          <div class="rounded-[12px] bg-[#1A1C3D] p-2 shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] border border-[#42389e]/50">
            <img src="/images/tile-create-flags.png" alt="Create flags visual" class="w-full rounded-[8px]" />
          </div>
          <div class="pt-6">
            <h3 class="font-sans text-[24px] font-semibold text-[#1a1c3d] mb-2">Create Flags</h3>
            <p class="font-body text-[18px] text-[#5F5F60] mb-6">Define features in IntelliToggle dashboard.</p>
            <Button variant="outline" class="border-[#F9A71E] text-[#F9A71E] hover:bg-[#F9A71E]/10">View Documentation</Button>
          </div>
        </div>
        <!-- Ship & Control -->
        <div>
          <div class="rounded-[12px] bg-[#1A1C3D] p-2 shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] border border-[#42389e]/50">
            <img src="/images/tile-ship-connect.png" alt="Ship & Control visual" class="w-full rounded-[8px]" />
          </div>
          <div class="pt-6">
            <h3 class="font-sans text-[24px] font-semibold text-[#1a1c3d] mb-2">Ship & Control</h3>
            <p class="font-body text-[18px] text-[#5F5F60] mb-6">Flip switches anytime, see instant results.</p>
            <Button variant="outline" class="border-[#F9A71E] text-[#F9A71E] hover:bg-[#F9A71E]/10">View Documentation</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from './Button.vue'
</script>
