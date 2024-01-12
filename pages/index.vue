<script setup lang="ts">
import type { Post } from "types/api"

const posts: Array<Post> = [
  {
    id: 1,
    title: 'title1',
    body: 'body1',
  },
  {
    id: 2,
    title: 'title2',
    body: 'body2',
  },
]
</script>

<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <p :class="$style.title">{{ post.title }}</p>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style module>
.title {
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
}
</style>