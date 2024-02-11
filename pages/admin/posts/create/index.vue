<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue'
import WYSIWYGEditor from '@/components/posts/WYSIWYGEditor.vue'

const submit = () => {
  alert('submit!')
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
            <input type="text" :class="$style.title_input">
          </div>
          <div :class="$style.body_container">
            <p :class="$style.content_text">
              本文
            </p>
            <div :class="$style.editor">
              <WYSIWYGEditor />
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
