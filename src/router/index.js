import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('../views/Admin.vue')
    }
	//{
		//path: '/about',
		//name: 'About',
		//component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	//}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router