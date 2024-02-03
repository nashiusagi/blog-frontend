<script setup lang="ts">
import dayjs from 'dayjs'
import type { Category, Post, Tag } from '@/types/api'
import MainLayout from '@/layouts/MainLayout.vue'
import CategoriesBlock from '@/components/common/CategoriesBlock.vue'
import CategoryLabel from '@/components/common/CategoryLabel.vue'
import TagLabel from '@/components/common/TagLabel.vue'

const route = useRoute()

const post = reactive<Post>({
  id: -1,
  title: '',
  body: '',
  thumbnail_path: '',
  category: {} as Category,
  tags: [] as Tag[],
  created_time: dayjs().format(),
  updated_time: dayjs().format(),
  deleted_time: dayjs().format(),
})
const categories = ref<Category[]>([])

onMounted(async () => {
  const { data, } = await usePost(Number(route.params.id))
  Object.assign(post, data)
  const { categoriesData, } = await useAllCategories()
  categories.value = categoriesData.value
})

</script>

<template>
  <MainLayout>
    <div :class="$style.show_body">
      <div :class="$style.post_show">
        <p :class="$style.title">
          <span>{{ route.params.id }}. </span>
          {{ post.title }}
        </p>
        <p :class="$style.body">
          {{ post.body }}
        </p>
      </div>
      <div :class="$style.labels">
        <div>
          <CategoryLabel :category="post.category" />
        </div>
        <div v-for="tag in post.tags" :key="tag.id">
          <TagLabel :tag="tag" />
        </div>
      </div>
      <CategoriesBlock :categories="categories" />
    </div>
  </MainLayout>
</template>

<style module>
.show_body {
  padding: 16px 24px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  background-color: #f5f6f6;
}
.post_show {
  padding: 16px 24px;
  background-color: #fff;
}

.title {
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
}

.body {
  padding: 0 12px;
}

.labels {
  display: flex;
  gap: 10px;
}
</style>
