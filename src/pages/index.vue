<template>
	<header>
		<h1 class="board-title">
			This is a Kanban
		</h1>
	</header>
	<main class="grid grid-cols-4 gap-6 justify-center items-start">
		<article class="column">
			<header class="flex items-center justify-between w-full">
				<h1 class="column-title">
					Backlog
				</h1>
				<icon name="note" class="column-card-header-icon" />
			</header>

			<div class="column-card">
				<icon name="edit" class="column-card-icon" />
				<h3 class="column-card-title">
					Twilio integration
				</h3>
				<p class="column-card-desc">
					Create new note via SMS. Support text, audio, links, and media.
				</p>

				<span class="column-card-badge">
					Zainab
				</span>
			</div>
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
