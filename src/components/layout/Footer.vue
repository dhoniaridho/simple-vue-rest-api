<template>
	<footer class="border-t">
		<div class="h-16 flex justify-center place-items-center">
			<p>
				&copy; {{ new Date().getFullYear() }}
				<a
					class="text-blue-500"
					href="http://dhoniaridho.vercel.app"
					target="_blank"
					rel="noopener noreferrer"
				>
					dhoniaridho
				</a>
			</p>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'Footer',
	};
</script>
