<script setup lang="ts">
import type { Category } from '@/types/api'

defineProps<{
  category: Category;
}>()
</script>

<template>
  <span :class="$style.category_label">
    <a :href="`/categories/${category.id}`">
      <Icon name="pajamas:folder" color="black" />
      {{ category.name }}
    </a>
  </span>
</template>

<style module>
.category_label {
  padding: 4px 6px;
  border: 1px solid #222;
  box-shadow: 1px 1px 6px -1px #666;
  border-radius: 999px;
  margin: auto;

  a {
    color: #111;
    text-decoration: none;
  }
}
</style>
