<template>
	<form @submit.prevent="onSubmit">
		<div class="text-md my-5 text-red-700">
			<h1 v-if="error.message">{{ error.message }}</h1>
		</div>
		<fieldset class="flex flex-col">
			<label class="capitalize" for="username">
				Username
			</label>
			<input
				v-model="form.username"
				class="mt-2bg-gray-50 py-2 px-3 outline-none focus:ring-offset-2 ring-2 ring-offset-blue-200 rounded-md"
				type="text"
				name="username"
				id="username"
			/>
		</fieldset>
		<fieldset class="flex flex-col mt-2">
			<label class="capitalize" for="password">
				password
			</label>
			<input
				type="password"
				v-model="form.password"
				class="mt-2bg-gray-50 py-2 px-3 outline-none focus:ring-offset-2 ring-2 ring-offset-blue-200 rounded-md"
				name="password"
				id="password"
			/>
		</fieldset>
		<Button
			:class="isLoading && 'cursor-not-allowed bg-gray-400'"
			class="mt-3"
			variant="primary"
			type="submit"
		>
			Log in
		</Button>
	</form>
</template>

<script>
	import { reactive, toRefs } from '@vue/reactivity';
	import Button from '../ui/Button.vue';
	import axios from 'axios';
	import Cookie from 'js-cookie';
	import { useRouter } from 'vue-router';

	export default {
		components: { Button },
		name: 'LoginForm',
		setup() {
			const router = useRouter();
			const state = reactive({
				isLoading: false,
				form: {
					username: '',
					password: '',
				},
				error: {
					message: '',
				},
			});
			const onSubmit = async () => {
				state.isLoading = true;
				try {
					const res = await axios.post(
						'https://reqres.in/api/login',
						state.form
					);
					state.error.message = '';
					Cookie.set('token', res.data.token);
					state.form = {
						username: '',
						password: '',
					};
					router.push({
						name: 'Home',
						path: '/',
					});
					state.isLoading = false;
				} catch (e) {
					state.error.message = e.response.data.error;
					state.isLoading = false;
					state.form = {
						password: '',
					};
				}
			};
			return {
				onSubmit,
				...toRefs(state),
			};
		},
	};
</script>

<style></style>
