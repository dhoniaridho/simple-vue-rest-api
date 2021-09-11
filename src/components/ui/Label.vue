<template>
	<label class="text-sm" :for="id">
		<slot />
	</label>
</template>

<script>
	export default {
		name: 'Label',
		props: {
			id: String,
		},
	};
</script>
