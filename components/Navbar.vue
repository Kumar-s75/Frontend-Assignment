<template>
  <nav class="bg-transparent absolute inset-x-0 top-0 z-50 h-[92px] xl:h-[92px] lg:h-[88px] sm:h-[72px]">
    <div class="max-w-[1920px] mx-auto px-[120px] h-full xl:px-[120px] lg:px-[80px] sm:px-6">
      <div class="flex justify-between items-center h-full">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3" style="margin-left: -2px;">
          <img src="/images/it-mark-white.svg" alt="IntelliToggle" class="h-[50.8px] w-[54.5px] sm:h-8 sm:w-8" />
          <span class="font-merriweatherSans font-bold text-[24px] text-white sm:text-[18px]">IntelliToggle</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-[27px]">
          <NuxtLink to="/" class="h-[46px] w-[78px] flex items-center justify-center">
            <span class="font-dm font-bold text-[20px] text-white">Home</span>
          </NuxtLink>
          <NuxtLink to="/about" class="h-[46px] w-[77px] flex items-center justify-center">
            <span class="font-dm font-light text-[20px] text-white">About</span>
          </NuxtLink>
          <NuxtLink to="/pricing" class="h-[46px] w-[82px] flex items-center justify-center">
            <span class="font-dm font-light text-[20px] text-white">Pricing</span>
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <div class="bg-[#f9a71e] px-6 py-3 rounded-[8px] shadow-[0px_0px_10px_10px_rgba(0,0,0,0.05)] sm:px-4 sm:py-2" style="margin-right: 14px;">
          <span class="font-body font-semibold text-[24px] bg-clip-text text-transparent bg-gradient-to-b from-[#42389e] to-[#0f1026] sm:text-[16px]">Start Sandbox</span>
        </div>

      </div>
    </div>
  </nav>
</template>

<script setup>
// No mobile menu needed for this simplified navbar design
</script>
