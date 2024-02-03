<script setup lang="ts">
import type { PostSummary } from '@/types/api'
import MainLayout from '@/layouts/MainLayout.vue'
import PostCard from '@/components/index/PostCard.vue'
import IndexTitleBlock from '@/components/index/IndexTitleBlock.vue'
import CategoriesBlock from '@/components/common/CategoriesBlock.vue'

const posts = ref<PostSummary[]>([])

onMounted(async () => {
  const { data, } = await useAllPosts()
  posts.value = data.value
})
</script>

<template>
  <MainLayout>
    <div :class="$style.index_body">
      <IndexTitleBlock />
      <div :class="$style.posts_list">
        <div v-for="post in posts" :key="post.id">
          <PostCard :post="post" />
        </div>
      </div>
      <CategoriesBlock />
    </div>
  </MainLayout>
</template>

<style module>
.index_body {
  padding: 16px 24px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  background-color: #f5f6f6;
}

.posts_list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
