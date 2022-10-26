<template>
	<div>
		<header class="flex flex-col px-4">
			<h1 class="board-title">
				{{ KanbanData.title }}
			</h1>
			<h3 class="board-desc">
				{{ KanbanData.desc }}
			</h3>
		</header>
		<main class="grid grid-cols-4 gap-6 justify-center items-start">
			<Column v-for="column in columns" :key="column.title" :title="column.title" :cards="KanbanData[column.id]" @change="updateData" />
		</main>
		<Fab />
	</div>
</template>

<script setup lang="ts">
import { getBoard, updateData } from '@/composables/board'
import { columns } from '@/helper/data'
import { enableReload, disableReload } from '@/composables/useUtils'

const id = useRoute().params.id
const { KanbanData, fetchedData } = getBoard()

onMounted(async () => {
	// disableReload()
	await fetchedData(id)
})
onUnmounted(enableReload)
</script>

<style scoped></style>
