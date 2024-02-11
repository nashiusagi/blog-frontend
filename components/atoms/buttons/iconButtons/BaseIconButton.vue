<script setup lang="ts">
</script>

<template>
  <div :class="$style.button">
    <button type="button" :class="$style.button">
      <slot />
    </button>
  </div>
</template>

<style module>
.button {
  width: 48px;
  height: 48px;
  background-color: #fff;
  border: none;

  :hover {
    background-color: #eee;
  }
}

.icon {
  width: 32px;
  height: 32px;
}
</style>
