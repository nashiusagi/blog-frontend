<script setup lang="ts">
defineProps<{
  name: string;
}>()
</script>

<template>
  <span :class="$style.category_label">
    <Icon name="pajamas:folder" color="black" />
    {{ name }}
  </span>
</template>

<style module>
.category_label {
  padding: 4px 6px;
  border: 1px solid #222;
  box-shadow: 1px 1px 6px -1px #666;
  border-radius: 999px;
  margin: auto;
}
</style>
