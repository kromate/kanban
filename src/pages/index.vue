<template>
	<div>
		<header class="flex flex-col px-4">
			<h1 class="board-title">
				{{ dummyData.title }}
			</h1>
			<h3 class="board-desc">
				{{ dummyData.desc }}
			</h3>
		</header>
		<main class="grid grid-cols-4 gap-6 justify-center items-start">
			<Column v-for="column in columns" :key="column.title" :title="column.title" :cards="dummyData[column.id]" @change="updateData" />
		</main>
	</div>
</template>

<script setup lang="ts">
import { dummyData, keys } from '@/helper/data'
const updateData = (e) => {
const changedArray = keys[e.type]
dummyData.value[changedArray] = e.data
	// console.log(e.data, dummyData.value[changedArray])
}

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
