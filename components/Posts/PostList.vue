<template>
  <section class="post-list">
    <post-preview
      v-for="{ id, title, previewText, thumbnail } in posts"
      :key="id"
      :id="id"
      :is-admin="isAdmin"
      :title="title"
      :preview-text="previewText"
      :thumbnail="thumbnail"
    />
  </section>
</template>

<script>
import PostPreview from "~/components/Posts/PostPreview";

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
