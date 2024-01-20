<script setup lang="ts">
import type { Post } from '@/types/api'
import MainLayout from '@/layouts/MainLayout.vue'
import CategoriesBlock from '@/components/common/CategoriesBlock.vue'

const route = useRoute()

const post = reactive<Post>({
  id: -1,
  title: '',
  body: '',
})

onMounted(async () => {
  const { data, } = await usePost(Number(route.params.id))
  Object.assign(post, data)
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
      <CategoriesBlock />
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
</style>
