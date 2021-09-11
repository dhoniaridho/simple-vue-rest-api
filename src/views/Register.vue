<template>
	<MainLayout>
		<div class="flex justify-center place-items-center h-[calc(100vh-4rem)]">
			<div class="bg-white shadow-lg px-20 py-10">
				<h1 class="text-3xl">Register</h1>
				<h1 class="my-3" v-if="message">{{ message }}</h1>
				<form @submit="handleSubmit" class="mt-5">
					<fieldset class="flex flex-col">
						<Label>
							Email
						</Label>
						<Input
							:value="data.email"
							@input="data.email = $event.target.value"
							name="email"
							id="email"
							required
						/>
					</fieldset>
					<fieldset class="flex flex-col">
						<Label>
							Password
						</Label>
						<Input
							:value="data.password"
							@input="data.password = $event.target.value"
							type="password"
							name="password"
							id="password"
							required
						/>
					</fieldset>
					<div class="mt-2">
						<p class="text-sm mt-4 block">
							already have a account?
							<router-link class="text-blue-500" to="/register"
								>Login Now</router-link
							>
						</p>
					</div>
					<Button class="mt-5" type="submit" variant="primary"> Log in </Button>
				</form>
			</div>
		</div>
	</MainLayout>
</template>

<script>
	import MainLayout from '@/components/layout/MainLayout.vue';
	import Button from '@/components/ui/Button.vue';
	import Input from '@/components/ui/Input.vue';
	import axios from 'axios';
	import { reactive, toRefs } from '@vue/reactivity';
	import Cookies from 'js-cookie';
	import { useRouter } from 'vue-router';

	export default {
		name: 'register',
		components: { MainLayout, Input, Button },
		setup() {
			const router = useRouter();
			const state = reactive({
				message: '',
				data: {
					email: '',
					password: '',
				},
			});

			const handleSubmit = async (e) => {
				e.preventDefault();
				try {
					const res = await axios.post(
						'https://reqres.in/api/register',
						state.data
					);
					Cookies.set('token', res.data.token);
					router.push({
						name: 'Home',
						path: '/',
					});
				} catch (e) {
					state.message = e.response.data.error;
				}
			};
			return {
				handleSubmit,
				...toRefs(state),
			};
		},
	};
</script>

<style></style>
