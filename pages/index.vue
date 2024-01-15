<script setup lang="ts">
import type { Post } from "~/types/api"
import MainLayout from "~/layouts/MainLayout.vue";

const posts = ref<Post[]>([])

onMounted( async () => {
  const { data } = await useAllPosts()
  console.log(data.value)
  posts.value=data.value
})
</script>

<template>
  <MainLayout>
    <div :class="$style.index_body">
      <div :class="$style.posts_list">
        <div v-for="post in posts" :key="post.id">
          <PostCard :post="post" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style module>
.index_body {
  padding: 16px 12px;
}

.posts_list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>