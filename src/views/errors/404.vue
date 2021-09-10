<template>
	<div class="flex justify-center place-items-center h-screen w-full">
		<div class="text-center">
			<h1 class="text-6xl">404</h1>
			<h1 class="text-xl mt-2">You're Lost</h1>
			<Link href="/" type="primary"> Go Back </Link>
		</div>
	</div>
</template>

<script>
	import Link from '../../components/ui/Link.vue';
	export default {
		components: { Link },
		name: 'NotFound',
	};
</script>
