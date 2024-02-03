<script setup lang="ts">
import { Tag } from '@/types/api'

defineProps<{
  tag: Tag;
}>()
</script>

<template>
  <span :class="$style.tag_label">
    <a :href="`/tags/${tag.id}`">
      <Icon name="pajamas:label" color="black" />
      {{ tag.name }}
    </a>
  </span>
</template>

<style module>
.tag_label {
  padding: 4px 6px;
  border: 1px solid #222;
  box-shadow: 1px 1px 6px -1px #666;
  border-radius: 999px;
  margin: auto;
}
</style>
