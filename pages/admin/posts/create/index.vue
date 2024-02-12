<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue'
import WYSIWYGEditor from '@/components/posts/WYSIWYGEditor.vue'
import MarkDownPreviewer from '@/components/posts/MarkDownPreviewer.vue'

const submit = () => {
  alert('submit!')
}

const formData = reactive({
  title: '',
  body: '',
  category: '',
  tags: [{
    id: 1,
    name: '',
  }],
})

const onBodyChange = (value: string) => {
  formData.body = value
}

const addTag = () => {
  const length = formData.tags.length
  formData.tags.push({
    id: length + 1,
    name: '',
  })
}

const removeTag = () => {
  formData.tags.pop()
}
</script>

<template>
  <AdminLayout>
    <div :class="$style.create_body">
      <form @submit.prevent="submit">
        <div :class="$style.form_container">
          <div :class="$style.title_container">
            <p :class="$style.content_text">
              タイトル
            </p>
            <input
              v-model="formData.title"
              type="text"
              :class="$style.title_input"
            >
          </div>
          <div :class="$style.body_container">
            <p :class="$style.content_text">
              本文
            </p>
            <div :class="$style.editor">
              <WYSIWYGEditor @input="onBodyChange" />
              <MarkDownPreviewer :source="formData.body" />
            </div>
          </div>
          <div :class="$style.category_container">
            <p :class="$style.content_text">
              <Icon name="pajamas:folder" color="black" />
              カテゴリー
            </p>
            <div>
              <input
                v-model="formData.category"
                type="text"
                :class="$style.category_input"
              >
            </div>
          </div>
          <div :class="$style.tag_container">
            <p :class="$style.content_text">
              <Icon name="pajamas:label" color="black" />
              タグ
            </p>
            <div :class="$style.tag_inputs_container">
              <div v-for="tag in formData.tags" :key="tag.id">
                <input v-model="tag.name" type="text" :class="$style.tag_input">
              </div>
              <div @click="addTag">
                + タグを追加
              </div>
              <div v-if="formData.tags.length>1" @click="removeTag">
                - タグを削除
              </div>
            </div>
          </div>
          <div :class="$style.submit_container">
            <button :class="$style.submit_button" type="submit">
              送信する
            </button>
          </div>
        </div>
      </form>
    </div>
  </AdminLayout>
</template>

<style module>
.create_body {
  padding: 12px;
}

.form_container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.title_container {
  padding: 12px;
}

.content_text {
  padding: 8px 0;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  margin: 0;
}

.title_input {
  width: 100%;
  font-size: 18px;
  line-height: 1.5;
  height: 28px;
}

.body_container {
  padding: 12px;
}

.editor {
  padding: 12px 0;
}

.category_container {
  padding: 12px;
}

.category_input {
  font-size: 18px;
  line-height: 1.5;
  height: 28px;
}

.tag_container {
  padding: 12px;
}

.tag_inputs_container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tag_input {
  font-size: 18px;
  line-height: 1.5;
  height: 28px;
}

.submit_container {
  padding: 12px;
}

.submit_button {
  width: 100%;
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  background-color: #327aff;
  color: #fff;
  border: 1px solid #327aff;
  border-radius: 4px;

  &:hover {
    background-color: #0059ff;
    cursor: pointer;
  }
}
</style>
