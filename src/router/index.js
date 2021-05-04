import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Blog',
		component: () => import('../views/Blog.vue'),
	},
	{
		path: '/blog/:id',
		name: 'Articulo',
		component: () => import('../views/Articulo.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
