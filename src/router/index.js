//Defining routing options
import  { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import FlatView from '../views/FlatView.vue';
import FontView from '../views/FontView.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/flaticons',
            name: 'Flat Icons',
            component: FlatView
        },
        {
            path: '/fontawesome',
            name: 'font',
            component: FontView
        },
    ]

})

export default router;