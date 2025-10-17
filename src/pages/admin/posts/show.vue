<template>
  <div class="mb-4">
    <h3>
    ADMIN POSTS
    </h3>
  </div>
  <div>
    <div>
      <div class="bg-white border border-gray-200 p-4">
        <h3 class="mb-4 text-lg">{{postStore.postTitle}}</h3>
        <p class="text-sm"> {{postStore.post.content}}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
//первые идут импорты
import {onMounted, reactive, ref} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import {usePostsStore} from "@/stores/post.js";
//далее идут option
defineOptions({
  name:'SHOW'
})
// далее hooks
onMounted(() => {
  postStore.getPost()
})
//data
const postStore = usePostsStore()
</script>
<style scoped>

</style>
