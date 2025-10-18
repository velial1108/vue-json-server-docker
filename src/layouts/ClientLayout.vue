<template>
  <section class="bg-white p-4">
    <header class="flex justify-between items-center">
      <h1 class="text-xl font-bold text-gray-800">CLIENT PANEL</h1>
      <div class="text-sm text-gray-600">
        <router-link to="/admin/dashboard" class="hover:text-blue-600">Admin View</router-link>
      </div>
    </header>
  </section>
  <section class="flex">
    <article class="bg-gray-100 w-full p-4">
      <slot />
    </article>
  </section>
</template>

<script setup>
defineOptions({
  name: 'ClientLayout'
})
</script>

<style scoped>
</style>
