<template>
  <section class="bg-white p-4">
    <header class="flex justify-between items-center">
      <h1 class="text-xl font-bold text-gray-800">ADMIN PANEL</h1>
      <div class="text-sm text-gray-600">
        <router-link to="/dashboard" class="hover:text-blue-600">User View</router-link>
      </div>
    </header>
  </section>

  <section class="flex">
    <aside class="bg-gray-800 w-1/4 min-h-screen text-white">
      <nav>
        <router-link
            :to="{name: 'admin.dashboard.index'}"
            class="block text-gray-200 p-4 border-b border-gray-600 hover:bg-gray-700 transition-colors"
            :class="{ 'bg-gray-700': $route.name === 'admin.dashboard.index' }"
        >
          📊 DASHBOARD
        </router-link>
        <router-link
            :to="{name: 'admin.posts.index'}"
            class="block text-gray-200 p-4 border-b border-gray-600 hover:bg-gray-700 transition-colors"
            :class="{ 'bg-gray-700': $route.name.includes('admin.posts') }"
        >
          📝 POSTS
        </router-link>
      </nav>
    </aside>

    <article class="bg-gray-100 w-3/4 min-h-screen p-6">
      <slot />
    </article>
  </section>
</template>

<script setup>
defineOptions({
  name: 'AdminLayout'
})
</script>

<style scoped>
/* Убираем сложные классы из style scoped */
</style>
