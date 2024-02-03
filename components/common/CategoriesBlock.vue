<script setup lang="ts">
import type { Category } from '@/types/api'

defineProps<{
  categories: Category[]
}>()
</script>

<template>
  <div :class="$style.categories_block">
    <div :class="$style.title">
      <p>
        <Icon name="pajamas:folder" color="black" />
        カテゴリー
      </p>
    </div>
    <div :class="$style.category_names">
      <div
        v-for="category in categories"
        :key="category.id"
      >
        <a :href="`/categories/${category.id}`">
          {{ category.name }}
        </a>
      </div>
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
  padding: 4px 0;
  p {
    margin: 0;
  }
}

.category_names {
  padding: 12px;
  a {
    text-decoration: none;
    color: #111;
    cursor: pointer;
    font-size: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
}
</style>
