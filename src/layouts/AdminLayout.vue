

<template>
<section class="bg-white p-4">
  <header>
    ADMIN PANEL
  </header>
</section>
  <section class="flex">
    <aside class="bg-gray-700 w-1/4 min-h-screen text-white">
<router-link :to="{name: 'admin.dashboard.index'}" class="block text-gray-200 p-4 border-b border-gray-500 ">DASHBOARD</router-link>
<router-link :to="{name: 'admin.posts.index'}" class="block text-gray-200 p-4 border-b border-gray-500 ">POSTS</router-link>
    </aside>
    <article class="bg-gray-50 w-3/4 p-4">
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

</style>
