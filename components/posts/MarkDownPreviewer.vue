<script setup lang="ts">
import { Marked } from 'marked'

const props = defineProps<{
  source: string
}>()

const marked = new Marked()
const compileMarkdown = ref<string>('')

watch(
  () => props.source,
  async () => {
    compileMarkdown.value = await marked.parse(props.source)
  }
)
</script>

<template>
  <div v-dompurify-html="compileMarkdown" />
</template>
