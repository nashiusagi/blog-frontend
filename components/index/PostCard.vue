<script setup lang="ts">
import type { PostSummary } from '@/types/api'

interface Props {
  post: PostSummary
}

defineProps<Props>()
</script>

<template>
  <div :class="$style.card">
    <div :class="$style.card_body">
      <div>
        <a :href="`/posts/${ post.id }`" />
        <p :class="$style.title">
          {{ post.title }}
        </p>
      </div>
      <div v-if="post.thumbnail_path !== undefined" :class="$style.thumbnail">
        <img :src="post.thumbnail_path" width="128px">
      </div>
    </div>
    <div>
      <p :class="$style.category_label">
        <a :href="`/categories/${post.category.id}`">
          <Icon name="pajamas:folder" color="black" />
          {{ post.category.name }}
        </a>
      </p>
      <div>
        <span v-for="tag in post.tags" :key="tag.id" :class="$style.tag_label">
          <a :href="`/tags/${tag.id}`">
            <Icon name="pajamas:label" color="black" />
            {{ tag.name }}
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<style module>
.card {
  padding: 16px 12px;
  border-radius: 4px;
  box-shadow: 1px 1px 6px -1px #666;
}

.card_body {
  display: flex;
  justify-content: space-between;
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
  margin: 0;
  padding: 8px 0 12px;
}

.category_label {
  margin: 0;
  padding: 4px;

  a {
    text-decoration: none;
    color: #111;
  }
}

.tag_label {
  padding: 4px 12px 4px 0;

  a {
    text-decoration: none;
    color: #111;
  }
}
</style>
