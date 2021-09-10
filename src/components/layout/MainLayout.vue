<template>
	<div>
		<Header />
		<main class="min-h-screen px-20 py-10">
			<slot />
		</main>
		<Footer />
	</div>
</template>

<script>
	import Footer from './Footer.vue';
	import Header from './Header.vue';
	export default {
		components: { Header, Footer },
		name: 'MainLayout',
	};
</script>
