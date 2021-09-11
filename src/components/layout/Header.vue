<template>
	<header>
		<nav>
			<div class="flex justify-between place-items-center md:px-16 border-b">
				<div>
					<router-link to="/">
						<h1 class="text-2xl">Simple Rest API</h1>
					</router-link>
				</div>
				<button class="md:hidden" @click="isCollapse = !isCollapse">
					menu
				</button>
				<ul class="hidden md:inline-flex">
					<li v-for="nav in navs" :key="nav.name">
						<nav-link :href="nav.href">
							{{ nav.name }}
						</nav-link>
					</li>
					<li>
						<nav-link href="/login">
							Login
						</nav-link>
					</li>
					<li>
						<nav-link to="/register">
							Register
						</nav-link>
					</li>
					<li>
						<a
							class="block py-2 lg:py-6 lg:inline-block lg:mt-0 mr-5 hover:text-blue-500 border-b-2 border-transparent font-semibold"
							href="javascript:void(0)"
							@click="handleLogout"
						>
							Logout
						</a>
					</li>
				</ul>
				<div
					:class="isCollapse ? '-translate-x-0' : '-translate-x-full'"
					class="fixed w-4/5 bg-white h-screen px-6 inset-0 transition-all"
				>
					<ul class="flex flex-col text-center">
						<li v-for="nav in navs" :key="nav.name">
							<nav-link :href="nav.href">
								{{ nav.name }}
							</nav-link>
						</li>
						<li>
							<nav-link href="/login">
								Login
							</nav-link>
						</li>
						<li>
							<nav-link to="/register">
								Register
							</nav-link>
						</li>
						<li>
							<a
								class="block py-2 lg:py-6 lg:inline-block lg:mt-0 mr-5 hover:text-blue-500 border-b-2 border-transparent font-semibold"
								href="javascript:void(0)"
								@click="handleLogout"
							>
								Logout
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
	import { Navigation } from '../../lib';
	import NavLink from '../ui/NavLink.vue';
	import Cookies from 'js-cookie';
	import { useRouter } from 'vue-router';
	import { reactive, toRefs } from '@vue/reactivity';

	export default {
		components: { NavLink },
		name: 'Header',
		setup() {
			const router = useRouter();
			const navs = Navigation;
			const state = reactive({
				isCollapse: false,
			});
			const handleLogout = (e) => {
				e.preventDefault();
				Cookies.remove('token');
				router.push({ path: '/login' });
			};
			return {
				...toRefs(state),
				handleLogout,
				navs,
			};
		},
	};
</script>

<style></style>
