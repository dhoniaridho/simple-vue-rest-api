<template>
	<MainLayout>
		<div v-if="isLoading">
			<h1>Loading</h1>
		</div>
		<div v-if="!isLoading">
			<img :src="user.avatar" alt="" />
			<h1 class="text-3xl">{{ user.first_name + ' ' + user.last_name }}</h1>
			<h3>{{ user.email }}</h3>
		</div>
	</MainLayout>
</template>

<script>
	import MainLayout from '@/components/layout/MainLayout.vue';
	import axios from 'axios';
	import { reactive, toRefs } from '@vue/reactivity';
	import { onMounted } from '@vue/runtime-core';
	import { useRoute, useRouter } from 'vue-router';
	export default {
		components: { MainLayout },
		setup() {
			const route = useRoute();
			const router = useRouter();
			const state = reactive({
				user: {},
				isLoading: true,
			});

			const fetchUser = async () => {
				try {
					const res = await axios.get(
						`https://reqres.in/api/users/${route.params.id}`
					);
					state.user = res.data.data;
					state.isLoading = false;
				} catch (e) {
					if (e.response.status === 404) {
						router.push({ path: '/404' });
					}
				}
			};
			onMounted(() => {
				fetchUser();
			});
			return {
				...toRefs(state),
			};
		},
	};
</script>

<style></style>
