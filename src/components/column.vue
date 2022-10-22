<template>
	<article class="column">
		<header class="flex items-center justify-between w-full">
			<h1 class="column-title">
				{{ title }}
			</h1>
			<icon name="add" class="column-card-header-icon" />
		</header>

		<ColumnCard
			v-for="card in cards"
			:id="card.id"
			:key="card.id"
			:title="card.title"
			:desc="card.desc"
			:level="card.level"
			:assignee="card.assignee"
		/>
	</article>
</template>

<script setup lang="ts">
defineProps({
	title: {
		default: 'default Title',
		type: String
	},
	cards: {
		default: () => [],
		type: Array
	}
})
</script>

<style scoped>

</style>
