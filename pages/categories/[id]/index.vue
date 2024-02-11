<script setup lang="ts">
import type { PostSummary, Category } from '@/types/api'
import MainLayout from '@/layouts/MainLayout.vue'

const route = useRoute()

const posts = ref<PostSummary[]>([])
const category = ref<Category>({} as Category)

onMounted(async () => {
  const { postsDataFilteredByCategory, } = await usePostsFilteredByCategory(Number(route.params.id))
  posts.value = postsDataFilteredByCategory.value.posts
  category.value = postsDataFilteredByCategory.value.category
})
</script>

<template>
  <MainLayout>
    <div>
      カテゴリー：{{ category.name }}
      <div v-for="post in posts" :key="post.id">
        <h1>{{ post.title }}</h1>
      </div>
    </div>
  </MainLayout>
</template>
