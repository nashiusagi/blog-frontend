<script setup lang="ts">
import type { Post } from "~/types/api"
import MainLayout from "~/layouts/MainLayout.vue";

const route = useRoute()

const post: Post = {
  id: 1,
  title: 'title1',
  body: 'body1',
}

</script>

<template>
  <MainLayout>
    <div :class="$style.post_show">
      <p :class="$style.title">
        <span>{{ route.params.id }}. </span>
        {{ post.title }}
      </p>
      <p :class="$style.body">
        {{ post.body }}
      </p>
    </div>
  </MainLayout>
</template>

<style module>
.post_show {
  padding: 16px 12px;
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