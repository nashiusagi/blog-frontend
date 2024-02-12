<script setup lang="ts">
import LinkIconButton from '@/components/atoms/buttons/iconButtons/LinkIconButton.vue'
import CodeIconButton from '@/components/atoms/buttons/iconButtons/CodeIconButton.vue'
import QuoteIconButton from '@/components/atoms/buttons/iconButtons/QuoteIconButton.vue'
import NumberListIconButton from '@/components/atoms/buttons/iconButtons/NumberListIconButton.vue'
import ListIconButton from '@/components/atoms/buttons/iconButtons/ListIconButton.vue'
import BoldIconButton from '@/components/atoms/buttons/iconButtons/BoldIconButton.vue'
import ItalicIconButton from '@/components/atoms/buttons/iconButtons/ItalicIconButton.vue'

import { addBoldAttribute } from '@/composables/markdown/addBoldAttribute'
import { addLinkAttribute } from '@/composables/markdown/addLinkAttribute'
import { addItalicAttribute } from '@/composables/markdown/addItalicAttribute'
import { addCodeAttribute } from '@/composables/markdown/addCodeAttribute'
import { addQuoteAttribute } from '@/composables/markdown/addQuoteAttribute'
import { addNumberListAttribute } from '@/composables/markdown/addNumberListAttribute'
import { addListAttribute } from '@/composables/markdown/addListAttribute'

const emits = defineEmits<{(e: 'input', value: string): void}>()

const onBodyChange = (body: string): void => {
  emits('input', body)
}

const body = ref<string>('')
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.icons_block">
      <BoldIconButton @click="()=>body=addBoldAttribute(body)" />
      <ItalicIconButton @click="()=>body=addItalicAttribute(body)" />
      <LinkIconButton @click="()=>body=addLinkAttribute(body)" />
      <CodeIconButton @click="()=>body=addCodeAttribute(body)" />
      <QuoteIconButton @click="()=>body=addQuoteAttribute(body)" />
      <NumberListIconButton @click="()=>body=addNumberListAttribute(body)" />
      <ListIconButton @click="()=>body=addListAttribute(body)" />
    </div>
    <div>
      <textarea
        v-model="body"
        :class="$style.textarea"
        @input="onBodyChange(body)"
      />
    </div>
  </div>
</template>

<style module>
.container {
  width: 100%;
}

.icons_block {
  display: flex;
  border: 1px solid #757575;
  border-radius: 4px;
}

.textarea {
  padding: 12px;
  width: calc(100% - 28px);
  height: 200px;
  font-size: 18px;
}
</style>

<style scoped>
textarea {
  font-family: inherit;
  font-weight: inherit;
  font-style: inherit;
}
</style>
