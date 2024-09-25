import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const children: Array<RouteRecordRaw> = []
let m : Set<string>|null = new Set()
Object.entries(import.meta.glob('@/views/**',{
    eager: false
})).forEach(([key, value]) => {
    const path = key.split('/')[3]
    if(m?.has(path) || !key.endsWith('/index.vue')) return
    children.push({
        path:'/'+path,
        name: path,
        component: value,
        // beforeEnter: (to, from, next) => {
        //     console.log('__Component:beforeEnter', to, from);
        //     next()
        // }
    })
})
m = null
const routes: Array<RouteRecordRaw> = [ { path: '/', children: children }, ];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// router.beforeEach((to, from, next) => {
//     console.log('__beforeEach', to, from);
//     next()
// })
// router.afterEach((to, from, failure) => {
//     console.log('__afterEach', to, from, failure);
// })

export {
    router as default,
    children as routes
}