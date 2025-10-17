

<template>
<div>
  POSTS
</div>
  <div>
    <div v-for = "post in posts">
<h3>{{post.title}}</h3>
<p>{{post.content}}</p>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
onMounted(() => {
  getPosts()
})
const posts = ref([])
const getPosts = function (){
  axios.get('http://localhost:3000/posts')
      .then(res => {
        posts.value = res.data
      })
}
</script>
<style scoped>

</style>
