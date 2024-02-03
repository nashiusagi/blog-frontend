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
      <p>{{ post.body }}</p>
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
</style>
