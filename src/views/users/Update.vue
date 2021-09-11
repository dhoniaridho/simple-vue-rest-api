<template>
	<MainLayout>
		<h1 class="text-blue-700" v-if="message">{{ message.name }} was edited</h1>
		<form @submit="UpdateUser">
			<fieldset class="flex flex-col">
				<Label id="name">Name</Label>
				<Input
					:value="form.name"
					required
					@input="form.name = $event.target.value"
					name="name"
				/>
			</fieldset>
			<fieldset class="flex flex-col">
				<label for="job">email</label>
				<Input
					:value="form.email"
					required
					@input="form.email = $event.target.value"
					name="email"
				/>
			</fieldset>
			<Button class="mt-5" variant="primary" type="submit">
				Submit
			</Button>
		</form>
	</MainLayout>
</template>

<script>
	import Input from '@/components/ui/Input.vue';
	import Button from '@/components/ui/Button.vue';
	import MainLayout from '@/components/layout/MainLayout.vue';
	import axios from 'axios';
	import { onMounted, reactive, toRefs } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	export default {
		components: {
			Input,
			Button,
			MainLayout,
		},
		setup() {
			const router = useRouter();
			const route = useRoute();
			const state = reactive({
				message: '',
				form: {
					name: '',
					email: '',
				},
			});
			onMounted(async () => {
				try {
					const res = await axios.get(
						`https://reqres.in/api/users/${route.params.id}`
					);
					state.form = {
						name: res.data.data.first_name,
						email: res.data.data.email,
					};
				} catch (e) {
					state.message = e.response;
					if (e.response.status === 404) {
						router.push({ path: '/404' });
					}
				}
			});
			const UpdateUser = async (e) => {
				e.preventDefault();
				try {
					const res = await axios.put(
						'https://reqres.in/api/users',
						state.form
					);
					console.log(res.data);
					state.form = {
						name: '',
						email: '',
					};
					state.message = res.data;
				} catch (e) {
					state.message = e.response.data;
				}
			};
			return {
				UpdateUser,
				...toRefs(state),
			};
		},
	};
</script>
