<template>
	<header>
		<h1 class="board-title">
			{{ dummyData.title }}
		</h1>
	</header>
	<main class="grid grid-cols-4 gap-6 justify-center items-start">
		<Column v-for="column in columns" :key="column.title" :title="column.title" :cards="dummyData[column.id]" />
	</main>
</template>

<script setup lang="ts">
import { dummyData } from '@/helper/data'

const columns = [
	{ title: 'Backlog', id: 'backlog' },
	{ title: 'To do', id: 'todo' },
	{ title: 'In progress', id: 'inprogress' },
	{ title: 'Done', id: 'done' }
]

definePageMeta({
	layout: 'default'
})

</script>

<style scoped></style>
