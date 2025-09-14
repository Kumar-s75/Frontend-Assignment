<template>
  <section class="pt-[120px] pb-0 bg-white">
    <div class="max-w-[1920px] mx-auto px-0 flex flex-col items-center gap-[200px] bg-white">
      <!-- Gradient card with pattern and CTAs -->
      <div class="w-[1384px] rounded-[12px] shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] bg-gradient-to-b from-[#42389e] to-[#0f1026] relative overflow-hidden px-[29px]">
        <div class="absolute inset-0 opacity-[0.11]" style="background-image: radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px); background-size: 20px 20px;"></div>
        <div class="relative flex flex-col items-center py-12">
          <h3 class="text-white text-[32px] font-semibold text-center leading-tight mb-2">Launch Features Confidently With AI Driven Feature Flags</h3>
          <p class="text-white/90 text-[18px]">Start for free, scale as your team grows</p>
          <div class="flex gap-8 justify-center w-[649px] mt-8 h-[55px]">
            <button class="flex-1 bg-[#F9A71E] rounded-[5px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-transparent bg-clip-text text-gradient-hero text-[20px] font-bold">Start for $1/mo</button>
            <button class="flex-1 rounded-[5px] relative">
              <span class="absolute inset-0 rounded-[5px] border border-[#F9A71E] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"></span>
              <span class="relative text-[#F9A71E] text-[20px] font-bold">Join AI Early Access</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Footer-like info section -->
      <div class="w-full bg-[#ecebf5] px-[120px] py-[100px]">
        <div class="max-w-[1920px] mx-auto flex items-center justify-between">
          <div class="w-[359px]">
            <div class="flex items-center gap-3 mb-2">
              <img src="/images/it-mark-gradient.svg" alt="logo" class="w-[54.5px] h-[50.8px]" />
              <span class="text-[18px] font-bold text-transparent bg-clip-text text-gradient-hero">IntelliToggle</span>
            </div>
            <p class="text-[18px] text-[#4A4B4D] opacity-90">IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.</p>
            <div class="mt-3">
              <div class="relative w-[30px] h-[30px]">
                <img src="/images/github-bg.svg" alt="github-bg" class="absolute inset-0 w-full h-full" />
                <img src="/images/github-icon.svg" alt="github" class="absolute w-[13.886px] h-[13.548px] top-[7.742px] left-[8.707px]" />
              </div>
            </div>
          </div>

          <div class="flex w-[510px] justify-between">
            <div class="w-64">
              <div class="text-[18px] text-[#5F5F60] mb-6">Resources</div>
              <div class="text-[18px] font-semibold text-[#323338] space-y-4">
                <p>Why IntelliToggle is different</p>
                <p>Customer Support</p>
                <p>Terms & conditions</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div class="w-[136px]">
              <div class="text-[18px] text-[#5F5F60] mb-6">Company</div>
              <div class="text-[18px] font-semibold text-[#323338] space-y-4">
                <p>Pricing</p>
                <p>Documentation</p>
                <p>About Us</p>
              </div>
            </div>
          </div>

          <div class="w-[321.667px]">
            <div class="text-[18px] font-semibold text-[#263238] mb-[27px]">Subscribe to Newsletter</div>
            <div class="relative">
              <input type="email" placeholder="Enter email address" class="w-[321.667px] h-[45.833px] rounded-[6.667px] bg-white px-4 text-[#8A8A8A] text-[11.667px]" />
              <button class="absolute right-0 top-0 h-[45.833px] px-11 bg-[#F9A71E] rounded-tr-[6.667px] rounded-br-[6.667px] text-transparent bg-clip-text text-gradient-hero font-bold text-[13.333px]">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>


