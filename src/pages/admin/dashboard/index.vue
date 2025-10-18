<template>
  <div class="admin-dashboard">
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      <p class="text-gray-600 mt-2">Welcome to your administration panel</p>
    </div>

    <!-- Статистика -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow border">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
            📝
          </div>
          <div>
            <p class="text-sm text-gray-600">Total Posts</p>
            <p class="text-2xl font-bold">{{ postsCount }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow border">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-green-100 text-green-600 mr-4">
            👥
          </div>
          <div>
            <p class="text-sm text-gray-600">Active Users</p>
            <p class="text-2xl font-bold">24</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow border">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
            💬
          </div>
          <div>
            <p class="text-sm text-gray-600">Comments</p>
            <p class="text-2xl font-bold">156</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Быстрые действия -->
    <div class="bg-white p-6 rounded-lg shadow border mb-6">
      <h2 class="text-xl font-semibold mb-4 text-gray-800">Quick Actions</h2>
      <div class="flex space-x-4">
        <router-link
            to="/admin/posts/create"
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Create New Post
        </router-link>
        <router-link
            to="/admin/posts"
            class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          📋 Manage Posts
        </router-link>
      </div>
    </div>

    <!-- Последние посты -->
    <div class="bg-white p-6 rounded-lg shadow border">
      <h2 class="text-xl font-semibold mb-4 text-gray-800">Recent Posts</h2>
      <div v-if="postStore.posts.length > 0">
        <div v-for="post in recentPosts" :key="post.id"
             class="border-b border-gray-200 py-3 last:border-b-0">
          <h3 class="font-semibold text-gray-800">{{ post.title }}</h3>
          <p class="text-gray-600 text-sm mt-1">{{ post.content.substring(0, 100) }}...</p>
          <div class="flex justify-between items-center mt-2">
            <span class="text-xs text-gray-500">ID: {{ post.id }}</span>
            <router-link
                :to="{name:'admin.posts.show', params: {id: post.id}}"
                class="text-blue-600 text-sm hover:underline"
            >
              View Details
            </router-link>
          </div>
        </div>
      </div>
      <div v-else class="text-gray-500 text-center py-4">
        No posts yet. <router-link to="/admin/posts/create" class="text-blue-600 hover:underline">Create your first post</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { usePostsStore } from '@/stores/post.js'

const postsStore = usePostsStore()
const postsCount = ref(0)

const recentPosts = computed(() => {
  return postsStore.posts.slice(0, 3) // Показываем только 3 последних поста
})

onMounted(async () => {
  await postsStore.getPosts()
  postsCount.value = postsStore.posts.length
})
</script>

<style scoped>
</style>
