<template>
	<MainLayout>
		<div class="flex justify-center place-items-center h-[calc(100vh-4rem)]">
			<div class="bg-white shadow-lg px-20 py-10">
				<h1 class="text-3xl">Login</h1>
				<LoginForm />
			</div>
		</div>
	</MainLayout>
</template>

<script>
	import { reactive, toRefs } from '@vue/reactivity';
	import MainLayout from '../components/layout/MainLayout.vue';
	import LoginForm from '../components/section/LoginForm.vue';

	export default {
		name: 'Login',
		components: { MainLayout, LoginForm },
		setup() {
			const state = reactive({
				form: {
					username: '',
					password: '',
				},
			});
			return {
				...toRefs(state),
			};
		},
	};
</script>
