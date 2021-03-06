import Cookies from 'js-cookie';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Index.vue';
import NotFound from '@/views/errors/404.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Users from '@/views/users/Index.vue';
import UsersView from '@/views/users/View.vue';
import UsersCreate from '@/views/users/Create.vue';
import UsersUpdate from '@/views/users/Update.vue';

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
		name: 'UsersView',
		component: UsersView,
	},
	{
		path: '/users/create',
		name: 'UsersCreate',
		component: UsersCreate,
	},
	{
		path: '/users/edit/:id',
		name: 'UsersUpdate',
		component: UsersUpdate,
	},
	{
		path: '/404',
		name: 'NotFound',
		component: NotFound,
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
