<template>
	<div>
		<h1 class="text-blue-700" v-if="message">{{ message.name }} was created</h1>
		<form @submit="postUser">
			<fieldset class="flex flex-col">
				<label for="name">Name</label>
				<Input
					:value="form.name"
					required
					@input="form.name = $event.target.value"
					name="name"
				/>
			</fieldset>
			<fieldset class="flex flex-col">
				<label for="job">Job</label>
				<Input
					:value="form.job"
					required
					@input="form.job = $event.target.value"
					name="job"
				/>
			</fieldset>
			<Button class="mt-5" variant="primary" type="submit">
				Submit
			</Button>
		</form>
	</div>
</template>

<script>
	import Input from '@/components/ui/Input.vue';
	import Button from '@/components/ui/Button.vue';
	import axios from 'axios';
	import { reactive, toRefs } from '@vue/runtime-core';
	export default {
		components: {
			Input,
			Button,
		},
		setup() {
			const state = reactive({
				message: '',
				form: {
					name: '',
					job: '',
				},
			});
			const postUser = async (e) => {
				e.preventDefault();
				try {
					const res = await axios.post(
						'https://reqres.in/api/users',
						state.form
					);
					state.form = {
						name: '',
						job: '',
					};
					state.message = res.data;
				} catch (e) {
					state.message = e.response.data;
				}
			};
			return {
				postUser,
				...toRefs(state),
			};
		},
	};
</script>
