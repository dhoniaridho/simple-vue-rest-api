<template>
	<MainLayout>Users</MainLayout>
</template>

<script>
	import { reactive, toRefs } from 'vue';
	import MainLayout from '../components/layout/MainLayout.vue';
	import { onMounted } from 'vue';
	import axios from 'axios';
	export default {
		components: { MainLayout },
		name: 'Users',
		setup() {
			const state = reactive({
				data: [],
			});
			const fetchUsers = async () => {
				try {
					const res = await axios.get('https://reqres.in/api/users?page=2');
					state.data = res.data;
					console.log(res.data);
				} catch (error) {
					console.log(error);
				}
			};
			onMounted(() => {
				fetchUsers();
			});
			return {
				...toRefs(state),
			};
		},
	};
</script>

<style></style>
