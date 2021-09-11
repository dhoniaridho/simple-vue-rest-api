import Cookies from 'js-cookie';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Index.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Users from '@/views/users/Index.vue';
import UsersView from '@/views/users/View.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
	},
	{
		path: '/users',
		name: 'Users',
		component: Users,
	},
	{
		path: '/users/:id',
		name: 'Users.view',
		component: UsersView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	const publicPages = ['/login', '/register'];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = Cookies.get('token');

	if (authRequired && !loggedIn) {
		return next({
			path: '/login',
		});
	}
	if (to.name === 'Login' && loggedIn) {
		return next({
			path: '/',
		});
	}
	if (to.name === 'Register' && loggedIn) {
		return next({
			path: '/',
		});
	} else {
		next();
	}
});

export default router;
