

<template>
  <div class="mn-4 p-4">
    <div class="bg-white border border-gray-200 p-4">
      <div class="mn-4 p-4">
        <input v-model="storePost.post.title" class="border border-gray-200 p-4 w-full" type="text" placeholder="title">
      </div>
      <div class="mn-4 p-4">
        <textarea v-model="storePost.post.content" class="border border-gray-200 p-4 w-full" placeholder="content"></textarea>
      </div>
      <div class="mn-4 p-4">
        <a @click.prevent="storePost.StorePost(storePost.post)" href="#" class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white" >STORE POST</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onMounted, reactive} from "vue";
import axios from "axios";
import {usePostsStore} from "@/stores/post.js";

defineOptions({
  name: 'Create'
})
onMounted(() =>{
  storePost.post = {}
})

const storePost = usePostsStore()

</script>
<style scoped>

</style>
