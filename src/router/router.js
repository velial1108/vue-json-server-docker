import { createRouter, createWebHistory } from "vue-router";

// ФИКСИРУЕМ ДЛЯ GITHUB PAGES
const router = createRouter({
    // ВАЖНО: Указываем base путь явно
    history: createWebHistory('/vue-json-server-docker/'),
    routes: [
        {
            path: '/',
            redirect: '/admin/dashboard'  // Меняем на админку вместо dashboard
        },
        {
            path: '/admin/dashboard',
            component: () => import('@/pages/admin/dashboard/index.vue'),
            name: 'admin.dashboard.index'
        },
        {
            path: '/admin/posts',
            component: () => import('@/pages/admin/posts/index.vue'),
            name: 'admin.posts.index'
        },
        {
            path: '/admin/posts/create',
            component: () => import('@/pages/admin/posts/create.vue'),
            name: 'admin.posts.create'
        },
        {
            path: '/admin/posts/:id',
            component: () => import('@/pages/admin/posts/show.vue'),
            name: 'admin.posts.show'
        },
        {
            path: '/admin/posts/:id/edit',
            component: () => import('@/pages/admin/posts/edit.vue'),
            name: 'admin.posts.edit'
        },
        {
            path: '/dashboard',
            component: () => import('@/pages/dashboard/index.vue'),
            name: 'dashboard.index'
        },
        {
            path: '/posts',
            component: () => import('@/pages/posts/index.vue'),
            name: 'posts.index'
        },
        // Добавляем catch-all для SPA (важно для прямых ссылок)
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
})

export default router
