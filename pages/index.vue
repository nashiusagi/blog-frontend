<script setup lang="ts">
import type { Post } from "types/api"
import MainLayout from "~/layouts/MainLayout.vue";

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
  <MainLayout>
    <div :class="$style.posts_list">
      <div v-for="post in posts" :key="post.id">
        <PostCard :post="post" />
      </div>
    </div>
  </MainLayout>
</template>

<style module>
.posts_list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>