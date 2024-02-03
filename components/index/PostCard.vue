<script setup lang="ts">
import type { PostSummary } from '@/types/api'

interface Props {
  post: PostSummary
}

defineProps<Props>()
</script>

<template>
  <div :class="$style.card">
    <a :href="`/posts/${ post.id }`" />
    <div>
      <p :class="$style.title">
        {{ post.title }}
      </p>
      <p :class="$style.category_label">
        <Icon name="pajamas:folder" color="black" />
        {{ post.category.name }}
      </p>
      <div>
        <span v-for="tag in post.tags" :key="tag.id" :class="$style.tag_label">
          <Icon name="pajamas:label" color="black" />
          {{ tag.name }}
        </span>
      </div>
    </div>
    <div v-if="post.thumbnail_path !== undefined" :class="$style.thumbnail">
      <img :src="post.thumbnail_path" width="128px">
    </div>
  </div>
</template>

<style module>
.card {
  display: flex;
  justify-content: space-between;
  padding: 16px 12px;
  border-radius: 4px;
  box-shadow: 1px 1px 6px -1px #666;
  cursor: pointer;
  position: relative;

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.thumbnail {
  width: 128px;
  margin-top: auto;
  margin-bottom: auto;
}

.title {
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
}

.category_label {
  margin: 0;
  padding: 4px;
}

.tag_label {
  padding: 4px 12px 4px 0;
}
</style>
