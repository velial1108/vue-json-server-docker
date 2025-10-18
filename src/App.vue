<template>
  <div>
    <div>
      <AdminLayout v-if="isAdmin">
        <router-view></router-view>
      </AdminLayout>
      <ClientLayout v-else>
        <router-view></router-view>
      </ClientLayout>
    </div>
  </div>
</template>

<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";
import { useRoute } from "vue-router";
import ClientLayout from "@/layouts/ClientLayout.vue";
import { ref, watch, computed } from "vue";

defineOptions({
  name: 'App'
})

const route = useRoute()

// Используем computed вместо watch - это безопаснее
const isAdmin = computed(() => {
  return route.path.includes('/admin/')
})
</script>

<style>
</style>
