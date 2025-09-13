<template>
  <section class="py-[120px] bg-white">
    <div class="max-w-[1920px] mx-auto px-[120px]">
      <!-- Header per Figma -->
      <div class="text-center mb-12">
        <h2 class="text-[40px] font-bold text-transparent bg-clip-text text-gradient-hero">Dart-Powered Feature Flag</h2>
      </div>
      <div class="text-center mb-10 max-w-[826px] mx-auto">
        <h3 class="font-sans text-[32px] font-semibold text-[#1a1c3d] mb-2">Not Another Generic Feature Flag Tool</h3>
        <p class="font-body text-[18px] text-[#5F5F60]">Most tools are built for every language, which means extra layers and slower toggles. IntelliToggle is built in Dart, for Dart — so it’s faster, safer, and built for your stack.</p>
      </div>

      <!-- Comparison table card -->
      <div class="bg-[#EDECF6] rounded-[8px] shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] border border-[#42389e] overflow-hidden">
        <div>
        <!-- header row -->
        <div class="bg-gradient-to-b from-[#42389e] to-[#0f1026] text-[#FEFEFF] flex">
          <div class="w-[378px] p-[10px] font-sans text-[24px] font-semibold lg:w-[320px] lg:text-[22px]">Features</div>
          <div class="flex-1 p-[10px] text-center font-sans text-[24px] font-semibold lg:text-[22px]">IntelliToggle</div>
          <div class="flex-1 p-[10px] text-center font-sans text-[24px] font-semibold lg:text-[22px]">Other Feature Flag</div>
        </div>
      </div>

        <!-- rows -->
        <div class="divide-y divide-[#EDECF6]">
          <div class="flex items-center">
            <div class="w-[378px] p-[10px] font-sans text-[18px] font-semibold text-[#5F5F60] lg:w-[320px]">Dart-native SDK & server</div>
            <div class="flex-1 p-[10px] flex justify-center"><img src="/images/tick-01.svg" alt="yes" class="w-5 h-5" /></div>
            <div class="flex-1 p-[10px] flex justify-center"><img src="/images/cancel-01.svg" alt="no" class="w-5 h-5" /></div>
          </div>
          <div class="flex items-center">
            <div class="w-[378px] p-[10px] font-sans text-[18px] font-semibold text-[#5F5F60] lg:w-[320px]">End-to-end type safety</div>
            <div class="flex-1 p-[10px] flex justify-center"><img src="/images/tick-01.svg" alt="yes" class="w-5 h-5" /></div>
            <div class="flex-1 p-[10px] flex justify-center"><img src="/images/cancel-01.svg" alt="no" class="w-5 h-5" /></div>
          </div>
          <div class="flex items-center">
            <div class="w-[378px] p-[10px] font-sans text-[18px] font-semibold text-[#5F5F60] lg:w-[320px]">AI-assisted roll-outs & cleanup</div>
            <div class="flex-1 p-[10px] flex justify-center"><img src="/images/tick-01.svg" alt="yes" class="w-5 h-5" /></div>
            <div class="flex-1 p-[10px] flex justify-center"><img src="/images/cancel-01.svg" alt="no" class="w-5 h-5" /></div>
          </div>
          <div class="flex items-center">
            <div class="w-[378px] p-[10px] font-sans text-[18px] font-semibold text-[#5F5F60] lg:w-[320px]">A/B testing built-in</div>
            <div class="flex-1 p-[10px] flex justify-center"><img src="/images/tick-01.svg" alt="yes" class="w-5 h-5" /></div>
            <div class="flex-1 p-[10px] flex justify-center"><img src="/images/cancel-01.svg" alt="no" class="w-5 h-5" /></div>
          </div>
          <div class="flex items-center">
            <div class="w-[378px] p-[10px] font-sans text-[18px] font-semibold text-[#5F5F60] lg:w-[320px]">Dart-Powered SDKs</div>
            <div class="flex-1 p-[10px] flex justify-center"><img src="/images/tick-01.svg" alt="yes" class="w-5 h-5" /></div>
            <div class="flex-1 p-[10px] flex justify-center"><img src="/images/cancel-01.svg" alt="no" class="w-5 h-5" /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from './Button.vue'
</script>