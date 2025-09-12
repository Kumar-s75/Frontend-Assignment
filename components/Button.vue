<template>
  <button 
    class="inline-flex items-center justify-center gap-2 px-6 py-3.5 
           font-body text-base font-semibold leading-6
           rounded-lg shadow-sm
           transition-all duration-200"
    :class="[
      size === 'lg' ? 'px-7 py-4 text-lg' : 
      size === 'sm' ? 'px-4 py-2.5 text-sm' : 
      'px-6 py-3.5 text-base',
      variant === 'primary' ? 'bg-primary text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary/20' :
      variant === 'secondary' ? 'bg-secondary text-white hover:bg-secondary/90 focus:ring-2 focus:ring-secondary/20' :
      variant === 'outline' ? 'border-2 border-gray-200 text-dark hover:bg-gray-50 focus:ring-2 focus:ring-gray-200/20' :
      variant === 'ghost' ? 'text-dark hover:bg-gray-50' :
      'bg-primary text-white hover:bg-primary/90'
    ]"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})
</script>
