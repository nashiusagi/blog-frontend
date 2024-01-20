<script setup lang="ts">
import TheHeader from '@/components/common/TheHeader.vue'
import TheFooter from '@/components/common/TheFooter.vue'
</script>

<template>
  <div>
    <div>
      <TheHeader />
    </div>
    <main>
      <slot />
    </main>
    <div>
      <TheFooter />
    </div>
  </div>
</template>
