<template>
	<button
		:to="href"
		class="px-5 py-2 my-1 rounded-md block"
		:class="this.classObject"
	>
		<slot />
	</button>
</template>

<script>
	export default {
		name: 'Link',
		data() {
			return {
				classObject: {
					'bg-blue-500 hover:bg-blue-600 text-white':
						this.$props.variant === 'primary',
				},
			};
		},
		props: {
			href: String,
			variant: String,
		},
	};
</script>
