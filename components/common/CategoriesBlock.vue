<script setup lang="ts">
import type { Category } from '@/types/api'

defineProps<{
  categories: Category[]
}>()
</script>

<template>
  <div :class="$style.categories_block">
    <p :class="$style.title">
      カテゴリー
    </p>
    <div v-for="category in categories" :key="category.id">
      <p>
        {{ category.name }}
      </p>
    </div>
  </div>
</template>

<style module>
.categories_block {
  background-color: #fff;
  padding: 16px;
}

.title {
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
}
</style>
