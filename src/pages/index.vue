<template>
	<main class="flex flex-wrap gap-6 min-h-screen w-screen justify-center items-start">
		<article class="column">
			<h1 class="column-title">
				Backlog
			</h1>
		</article>
		<article class="column">
			<h1 class="column-title">
				To do
			</h1>
		</article>
		<article class="column">
			<h1 class="column-title">
				In progress
			</h1>
		</article>
		<article class="column">
			<h1 class="column-title">
				Done
			</h1>
		</article>
	</main>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'default'
})
</script>

<style scoped></style>
