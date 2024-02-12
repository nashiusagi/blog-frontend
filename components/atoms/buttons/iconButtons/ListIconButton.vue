<script setup lang="ts">
import BaseIconButton from './BaseIconButton.vue'
</script>

<template>
  <BaseIconButton>
    <Icon name="carbon:list" color="black" :class="$style.icon" />
  </BaseIconButton>
</template>

<style module>
.icon {
  width: 32px;
  height: 32px;
}
</style>
