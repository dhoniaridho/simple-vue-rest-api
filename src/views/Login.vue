<template>
	<MainLayout>
		<div class="flex justify-center place-items-center h-[calc(100vh-4rem)]">
			<div class="bg-white shadow-lg px-20 py-10">
				<h1 class="text-3xl">Login</h1>
				<form class="mt-5">
					<Input name="Username" />
					<Input name="Password" />
					<p class="text-sm mt-4">
						dont have an account?
						<router-link class="text-blue-500" to="/register"
							>Create Now</router-link
						>
					</p>
					<Button class="mt-5" type="submit" variant="primary"> Log in </Button>
				</form>
			</div>
		</div>
	</MainLayout>
</template>

<script>
	import MainLayout from '../components/layout/MainLayout.vue';
	import Button from '../components/ui/Button.vue';
	import Input from '../components/ui/Input.vue';
	export default {
		name: 'Login',
		components: { MainLayout, Input, Button },
	};
</script>
