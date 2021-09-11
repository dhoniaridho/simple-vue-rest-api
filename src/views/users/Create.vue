<template>
	<MainLayout>
		<h1 class="text-3xl my-3">Create User</h1>
		<CreateUser></CreateUser>
	</MainLayout>
</template>

<script>
	import MainLayout from '@/components/layout/MainLayout.vue';
	import CreateUser from '../../components/section/CreateUser.vue';
	export default {
		components: { MainLayout, CreateUser },
		setup() {},
	};
</script>
