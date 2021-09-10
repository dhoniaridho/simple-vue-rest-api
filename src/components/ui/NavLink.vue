<template>
	<router-link
		class="
			block
			py-2
			lg:py-6 lg:inline-block lg:mt-0
			mr-5
			hover:text-blue-500
			border-b-2 border-transparent
			font-semibold
		"
		active-class="border-blue-500 text-blue-500"
		:to="href"
	>
		<slot />
	</router-link>
</template>

<script>
	export default {
		name: 'NavLink',
		props: {
			href: String,
		},
	};
</script>
