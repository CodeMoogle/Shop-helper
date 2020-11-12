import Vue from 'vue'
import VueRouter from 'vue-router'

//Vuex store
import store from '@/store/'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/main',
		name: 'main',
		component: () => import('@/views/Main.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/Login.vue'),
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('@/views/Register.vue'),
	},
	{
		path: '/addGoods',
		name: 'addGoods',
		component: () => import('@/views/AddGoods.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: '/',
		name: 'home',
		component: Home,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!store.state.auth.user) {
			next({
				name: 'login',
			})
		}
		next()
	} else {
		next()
	}
})

export default router
