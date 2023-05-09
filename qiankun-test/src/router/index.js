import { createRouter, createWebHistory } from "vue-router";

// 2. 配置路由
const routes = [
    {
        path: '/child-one',
        component: () => import('@/views/childOne/index.vue'),
    },
    {
        path: '/child-two',
        component: () => import('@/views/childTwo/index.vue'),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router
