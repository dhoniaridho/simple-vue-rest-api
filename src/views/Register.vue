<template>
	<MainLayout>
		<div class="flex justify-center place-items-center h-[calc(100vh-4rem)]">
			<div class="bg-white shadow-lg px-20 py-10">
				<h1 class="text-3xl">Register</h1>
				<form class="mt-5">
					<Input name="Name" />
					<Input name="Email" />
					<Input name="Username" />
					<Input name="Password" />
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
	import MainLayout from '../components/layout/MainLayout.vue';
	import Button from '../components/ui/Button.vue';
	import Input from '../components/ui/Input.vue';
	export default {
		name: 'register',
		components: { MainLayout, Input, Button },
	};
</script>

<style></style>
