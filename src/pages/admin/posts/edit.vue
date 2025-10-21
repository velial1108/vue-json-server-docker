

<template>
  <div class="mn-4 p-4">
    <div class="bg-white border border-gray-200 p-4">
      <div class="mn-4 p-4">
        <input v-model="postStore.post.title" class="border border-gray-200 p-4 w-full" type="text" placeholder="title">
      </div>
      <div class="mn-4 p-4">
        <textarea v-model="postStore.post.content" class="border border-gray-200 p-4 w-full" placeholder="content"></textarea>
      </div>
      <div class="mn-4 p-4">
        <a @click.prevent="postStore.updatePost(postStore.post.id, postStore.post)" href="#" class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white" >UPDATE POST</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onMounted, reactive} from "vue";
import {usePostsStore} from "@/stores/post.js";
import {useRoute} from "vue-router";

defineOptions({
  name: 'Edit'
})
onMounted(() => {
  const route = useRoute()
  postStore.getPost(route.params.id) // ← передаём id явно
})


const postStore = usePostsStore()

</script>
<style scoped>

</style>
