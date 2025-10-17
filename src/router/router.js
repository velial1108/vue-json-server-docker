import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/admin/dashboard',
            component: () => import('@/pages/admin/dashboard/index.vue'),
            name:'admin.dashboard.index'
        },
        {
            path: '/admin/posts',
            component: () => import('@/pages/admin/posts/index.vue'),
            name:'admin.posts.index'
        },
        //сначала create он выполнится раньше, параметризированные route должны быть в конце списка
        {
            path: '/admin/posts/create',
            component: () => import('@/pages/admin/posts/create.vue'),
            name:'admin.posts.create'
        },
        // заданный параметр id для каждого поста show (параметризированный роут за счет :id)
        {
            path: '/admin/posts/:id',
            component: () => import('@/pages/admin/posts/show.vue'),
            name:'admin.posts.show'
        },
        {
            path: '/admin/posts/:id/edit',
            component: () => import('@/pages/admin/posts/edit.vue'),
            name:'admin.posts.edit'
        },
        {
            path: '/dashboard',
            component: () => import('@/pages/dashboard/index.vue'),
            name:'dashboard.index'
        },
        {
            path: '/posts',
            component: () => import('@/pages/posts/index.vue'),
            name:'posts.index'
        }
    ]
})
export default router
