<template>
  <div>
    <Navbar />
    <!-- INLINE HERO DIAGNOSTIC: remove after verification -->
    <div id="inline-hero-diag" style="min-height:140px; outline:3px solid #ff0066; background:linear-gradient(180deg,#42389E 0%, #2F2E68 60%, #0F1026 100%); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; letter-spacing:0.5px;">
      INLINE HERO DIAG
    </div>
    <HeroSection />
    <Trusted />
    <WhatIs />
    <OpenFeatureSection />
    <ControlPower />
    <Features />
    <ComingSoon />
    <Growth />
    <UseIntelliToggle />
    <HeroCtaFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // eslint-disable-next-line no-console
  console.log('[DIAG] index page mounted')
  const el = document.getElementById('inline-hero-diag')
  // eslint-disable-next-line no-console
  console.log('[DIAG] inline hero present:', !!el)
})
</script>