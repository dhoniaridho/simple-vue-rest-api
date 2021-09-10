import Cookies from 'js-cookie';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Index.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Users from '../views/Users.vue';

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
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	// redirect to login page if not logged in and trying to access a restricted page
	const publicPages = ['/login'];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = Cookies.get('token');

	if (authRequired && !loggedIn) {
		return next({
			path: '/login',
		});
	}

	next();
});

export default router;
