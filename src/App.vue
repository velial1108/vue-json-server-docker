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
import { useRoute, useRouter } from "vue-router";
import ClientLayout from "@/layouts/ClientLayout.vue";
import { ref, watch, onMounted } from "vue";

defineOptions({
  name: 'App'
})

const router = useRouter()
const route = useRoute()
const isAdmin = ref(false)

// Простой способ определения админки
const checkAdminRoute = () => {
  const currentPath = route.path;
  isAdmin.value = currentPath.includes('/admin/');
}

// Следим за изменениями маршрута
watch(() => route.path, () => {
  checkAdminRoute();
});

// Проверяем при загрузке - используем onMounted
onMounted(() => {
  checkAdminRoute();
});
</script>

<style>
</style>
