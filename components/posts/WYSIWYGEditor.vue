<script setup lang="ts">
import LinkIconButton from '@/components/atoms/buttons/iconButtons/LinkIconButton.vue'
import CodeIconButton from '@/components/atoms/buttons/iconButtons/CodeIconButton.vue'
import QuoteIconButton from '@/components/atoms/buttons/iconButtons/QuoteIconButton.vue'
import NumberListIconButton from '@/components/atoms/buttons/iconButtons/NumberListIconButton.vue'
import ListIconButton from '@/components/atoms/buttons/iconButtons/ListIconButton.vue'
import BoldIconButton from '@/components/atoms/buttons/iconButtons/BoldIconButton.vue'
import ItalicIconButton from '@/components/atoms/buttons/iconButtons/ItalicIconButton.vue'
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.icons_block">
      <BoldIconButton />
      <ItalicIconButton />
      <LinkIconButton />
      <CodeIconButton />
      <QuoteIconButton />
      <NumberListIconButton />
      <ListIconButton />
    </div>
    <div>
      <textarea :class="$style.textarea" />
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
  font-weight: 300;
  font-style: normal;
  font-family: 'Hiragino Sans'
}
</style>
