import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Video from '../views/Video.vue';


let routes = [
    {
        path: '/video',
        name: 'Video',
        component: Video,
        props: true,
    }
    ,{
        path: '/',
        name: 'Home',
        component: Home,
        props: true,
        
    
    },
    {   
        name: "error",
        path: "/:catchAll(.*)",
        redirect: "/",
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;