<script setup lang="ts">
import type { Post } from "types/api"

interface Props {
  post: Post
}

defineProps<Props>()
</script>

<template>
  <div :class="$style.card">
    <a :href="`/posts/${ post.id }`" />
    <p :class="$style.title">
      {{ post.title }}
    </p>
    <p>{{ post.body }}</p>
  </div>
</template>

<style module>
.card {
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

.title {
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
}
</style>
