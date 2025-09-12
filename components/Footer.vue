<template>
  <footer class="bg-[#ecebf5]">
    <div class="max-w-[1920px] mx-auto px-[120px] py-[100px] xl:px-[120px] lg:px-[80px] sm:px-6">
      <div class="flex items-center justify-between w-full sm:flex-col sm:items-start sm:gap-10">
        <!-- Company Info Section -->
        <div class="w-[359px]">
          <div class="flex items-center gap-3 mb-2">
            <img src="/images/it-mark-gradient.svg" alt="logo" class="w-[54.5px] h-[50.8px]" />
            <span class="text-[18px] font-bold text-transparent bg-clip-text text-gradient-hero">IntelliToggle</span>
          </div>
          <p class="text-[18px] text-[#4a4b4d] opacity-90 mb-3">
            IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.
          </p>
          <div class="relative w-[30px] h-[30px]">
            <img src="/images/github-bg.svg" alt="github-bg" class="absolute inset-0 w-full h-full" />
            <img src="/images/github-icon.svg" alt="github" class="absolute w-[13.886px] h-[13.548px] top-[7.742px] left-[8.707px]" />
          </div>
        </div>

        <!-- Links Section -->
        <div class="flex w-[510px] justify-between">
          <!-- Resources -->
          <div class="w-64">
            <div class="text-[18px] text-[#5f5f60] mb-6">Resources</div>
            <div class="text-[18px] font-semibold text-[#323338] space-y-4">
              <p>Why IntelliToggle is different</p>
              <p>Customer Support</p>
              <p>Terms & conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <!-- Company -->
          <div class="w-[136px]">
            <div class="text-[18px] text-[#5f5f60] mb-6">Company</div>
            <div class="text-[18px] font-semibold text-[#323338] space-y-4">
              <p>Pricing</p>
              <p>Documentation</p>
              <p>About Us</p>
            </div>
          </div>
        </div>

        <!-- Newsletter Section -->
        <div class="w-[321.667px]">
          <div class="text-[18px] font-semibold text-[#263238] mb-[27px]">Subscribe to Newsletter</div>
          <div class="relative">
            <input
              type="email"
              placeholder="Enter email address"
              class="w-[321.667px] h-[45.833px] rounded-[6.667px] bg-white px-[16.67px] text-[#8a8a8a] text-[11.667px]"
            />
            <button class="absolute right-0 top-0 h-[45.833px] px-11 bg-[#f9a71e] rounded-tr-[6.667px] rounded-br-[6.667px] text-transparent bg-clip-text text-gradient-hero font-bold text-[13.333px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>