<template>
  <div class="mb-4 p-2">
    <h3>
    ADMIN POSTS
    </h3>
  </div>
  <div class="mn-4 p-2">
    <router-link :to="{name:'admin.posts.create'}"class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white" >CREATE POST</router-link>
  </div>
  <div>
    <div>
<!--//таблицы в html-->
    <table class="w-full border border-gray-200 p-2">
<!--      //верхняя часть таблицы -->
      <thead>
        <tr>
<!--          тут всегда все пишется th внутри строки tr это ячейки заголовки-->
          <th class="bg-white border-b border-gray-200 text-left">ID</th>
          <th class="bg-white border-b border-gray-200 text-left">TITLE</th>
          <th class="bg-white border-b border-gray-200 text-left">CONTENT</th>
          <th class="bg-white border-b border-gray-200 text-left">ACTIONS</th>
        </tr>
      </thead>
<!--      тело таблицы тут уже разделение ячеек идет через <td> -->
      <tbody>
          <tr v-for="post in postStore.posts">
            <td class="bg-white border-b border-gray-200 text-left">
              {{post.id}}
            </td>
            <td class="bg-white border-b border-gray-200 text-left">
              <router-link :to="{name:'admin.posts.show', params: {id: post.id}}">{{post.title}}</router-link>
            </td>
            <td class="bg-white border-b border-gray-200 text-left">
              {{post.content}}
            </td>

            <td class="bg-white border-b border-gray-200 text-left flex mt-2">
              <div class="mr-2">
                <router-link :to="{name:'admin.posts.edit', params:{id:post.id}}" class="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-emerald-600 cursor-pointer">

                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
                </router-link>
              </div>
              <div>
              <svg @click="postStore.deletePost(post)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-red-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              </div>
            </td>
          </tr>
      </tbody>
    </table>
<!--    <div v-for = "post in posts">-->
<!--      <h3>{{post.title}}</h3>-->
<!--      <p>{{post.content}}</p>-->
<!--    </div>-->
    </div>
  </div>
</template>
<script setup>
//первые идут импорты
import {onMounted, ref} from "vue";
import {usePostsStore} from "@/stores/post.js";
//далее идут option
defineOptions({
  name:'Index'
})
//далее hooks
onMounted(() => {
  postStore.getPosts()
})
//data
const postStore = usePostsStore()

</script>
<style scoped>

</style>
