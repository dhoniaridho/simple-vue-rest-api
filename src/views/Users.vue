<template>
	<MainLayout>
		<div class="my-10">
			<h1 class="text-3xl font-semibold">list users</h1>
			<h1>page: {{ page }}</h1>
		</div>
		<ul class="grid grid-cols-3 gap-5">
			<li v-for="d in data.data" :key="d.id">
				<router-link :to="d.first_name.toLowerCase()">
					<img class="w-full h-64 object-cover" :src="d.avatar" alt="" />
					{{ d.first_name }}
				</router-link>
			</li>
		</ul>
		<div class="mt-4 flex">
			<Button
				v-if="page > 1"
				variant="primary"
				class="mx-2"
				@click="previousPage"
				>previous page</Button
			>
			<Button
				v-if="page < data.total_pages"
				variant="primary"
				class="mx-2"
				@click="nextPage"
				>next page</Button
			>
		</div>
	</MainLayout>
</template>

<script>
	import { reactive, toRefs } from 'vue';
	import MainLayout from '../components/layout/MainLayout.vue';
	import { onMounted } from 'vue';
	import axios from 'axios';
	import Button from '../components/ui/Button.vue';
	export default {
		components: { MainLayout, Button },
		name: 'Users',
		setup() {
			const state = reactive({
				data: [],
				page: 1,
				isLoad: true,
			});
			const fetchUsers = async () => {
				try {
					const res = await axios.get(
						`https://reqres.in/api/users?page=${state.page}`
					);
					state.isLoad = false;
					state.data = res.data;
				} catch (error) {
					console.log(error);
				}
			};
			const nextPage = () => {
				if (state.page < state.data.total_pages) {
					state.page++;
					fetchUsers();
				}

				fetchUsers();
			};
			const previousPage = () => {
				if (state.page > 1) {
					state.page = state.page - 1;
					fetchUsers();
				}
			};
			onMounted(() => {
				fetchUsers();
			});
			return {
				nextPage,
				previousPage,
				...toRefs(state),
			};
		},
	};
</script>

<style></style>
