<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue'
import WYSIWYGEditor from '@/components/posts/WYSIWYGEditor.vue'
</script>

<template>
  <AdminLayout>
    <div>
      post create
      <form>
        <div>
          <p>
            title: <input type="text">
          </p>
          <p> body</p>
          <div :class="$style.editor">
            <WYSIWYGEditor />
          </div>
        </div>
      </form>
    </div>
  </AdminLayout>
</template>

<style module>
.editor {
  padding: 12px;
}
</style>
