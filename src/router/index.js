import {createRouter, createWebHistory } from 'vue-router'

const routes  = [

    {
        path: "/gigs",
        name: 'Gigs',
        components: require("@/views/Gigs/Gigs.vue")
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;