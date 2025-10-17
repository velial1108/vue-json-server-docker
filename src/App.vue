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
import {useRoute, useRouter} from "vue-router";
import ClientLayout from "@/layouts/ClientLayout.vue";
import {ref} from "vue";


defineOptions({
  name: 'App'
})
const router = useRouter()
const route = useRoute()
const isAdmin = ref(false)
router.isReady().then(()=>{
    isAdmin.value = route.name.split('.')[0] === 'admin'
})

</script>
<style>
</style>
