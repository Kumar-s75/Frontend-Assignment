<template>
  <section class="relative py-[120px]" style="background-image:url('/images/coming-soon-bg.png'); background-size:cover; background-position:center;">
    <div class="absolute inset-0 bg-gradient-to-b from-[#42389ecc] to-[#1A1C3Dcc]"></div>
    <div class="relative max-w-[1920px] mx-auto px-[120px]">
      <!-- Tag -->
      <div class="flex justify-center mb-6">
        <div class="rounded-[32px] bg-[#F9A71E] px-8 py-2.5">
          <span class="text-transparent bg-clip-text text-gradient-hero font-sans font-semibold text-[18px]">Coming Soon</span>
        </div>
      </div>
      <!-- Title -->
      <h2 class="text-center text-[40px] font-bold text-white mb-12">DartCodeAI That Actually Changes Flagging</h2>

      <!-- Cards grid -->
      <div class="grid lg:grid-cols-2 gap-[120px]">
        <div class="rounded-[12px] border border-white/20 bg-white/5 p-6">
          <div class="bg-[#EDECF6] inline-flex rounded-[4px] p-[11px] mb-6">
            <img src="/images/icon-flag-fill.svg" alt="AutoFlag" class="w-6 h-6" />
          </div>
          <h3 class="text-[24px] font-semibold text-white mb-2">AutoFlag AI (LLM-Assisted Flag Creation)</h3>
          <p class="text-[18px] text-[#EDECF6]">Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you..</p>
        </div>
        <div class="rounded-[12px] border border-[#EDECF6]/100 bg-white/5 p-6">
          <div class="bg-[#EDECF6] inline-flex rounded-[4px] p-[11px] mb-6">
            <img src="/images/icon-smart-toy.svg" alt="SmartRamp" class="w-6 h-6" />
          </div>
          <h3 class="text-[24px] font-semibold text-white mb-2">SmartRamp AI (AI-Driven Rollout Optimization)</h3>
          <p class="text-[18px] text-[#EDECF6]">Rollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics.</p>
        </div>
        <div class="rounded-[12px] border border-white/20 bg-white/5 p-6">
          <div class="bg-[#EDECF6] inline-flex rounded-[4px] p-[11px] mb-6">
            <img src="/images/icon-explainflags.svg" alt="ExplainFlags" class="w-6 h-6" />
          </div>
          <h3 class="text-[24px] font-semibold text-white mb-2">ExplainFlags AI (LLM Root-Cause + Insights)</h3>
          <p class="text-[18px] text-[#EDECF6]">Understand issues instantly with AI-generated, plain-language insights tied to your flags.</p>
        </div>
        <div class="rounded-[12px] border border-[#EDECF6]/100 bg-white/5 p-6">
          <div class="bg-[#EDECF6] inline-flex rounded-[4px] p-[11px] mb-6">
            <img src="/images/icon-autosegment.svg" alt="AutoSegment" class="w-6 h-6" />
          </div>
          <h3 class="text-[24px] font-semibold text-white mb-2">AutoSegment AI (Behavioral Segmentation)</h3>
          <p class="text-[18px] text-[#EDECF6]">Target the right users automatically. AI builds segments from live behavior—no manual rules.</p>
        </div>
      </div>

      <!-- Enterprise only -->
      <div class="text-center mt-12 text-[32px] font-semibold text-[#F9A71E]">Enterprise Only</div>

      <!-- CTA bar -->
      <div class="mt-10 rounded-[12px] border border-[#EDECF6] bg-white/5">
        <div class="flex flex-col md:flex-row items-center gap-6 justify-between px-[33px] py-7">
          <p class="text-white text-[24px]"><span class="text-[#F9A71E] font-semibold">Be The First</span> To Try Out Our New AI Features.</p>
          <div class="grid grid-cols-1 md:inline-grid md:[grid-template-columns:max-content] md:[grid-template-rows:max-content]">
            <div class="relative h-[55px] w-[474px] rounded-[8px] border border-[#EDECF6]">
              <input type="email" placeholder="Enter email address" class="absolute inset-0 w-full h-full bg-transparent text-[#EDECF6]/80 px-4 rounded-[8px] placeholder-[#EDECF6]/50 outline-none" />
            </div>
            <button class="md:ml-[265px] md:mt-[-48px] bg-[#F9A71E] text-[#1A1C3D] rounded-[4px] h-[42px] w-[202px] text-[18px] font-semibold">Join AI Early Access</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>


