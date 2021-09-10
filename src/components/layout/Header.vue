<template>
	<header>
		<nav>
			<div class="flex justify-between place-items-center px-16 border-b">
				<div>
					<router-link to="/">
						<h1 class="text-2xl">Simple Rest API</h1>
					</router-link>
				</div>
				<ul class="inline-flex">
					<li v-for="nav in navs" :key="nav.name">
						<nav-link :href="nav.href">
							{{ nav.name }}
						</nav-link>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
	import { Navigation } from '../../lib';
	import NavLink from '../ui/NavLink.vue';
	export default {
		components: { NavLink },
		name: 'Header',
		setup() {
			const navs = Navigation;
			return {
				navs,
			};
		},
	};
</script>

<style></style>
