<template>
	<input
		class="
				mt-2
				bg-gray-50
				py-2
				px-3
				outline-none
				focus:ring-offset-2
				ring-2 ring-offset-blue-200
				rounded-md
			"
		type="text"
		:name="name"
		:id="name"
	/>
</template>

<script>
	export default {
		name: 'Input',
		props: {
			name: String,
		},
	};
</script>
