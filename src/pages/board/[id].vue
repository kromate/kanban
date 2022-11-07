<template>
	<div v-if="KanbanData.title">
		<header class="flex flex-col px-4">
			<h1 class="board-title flex gap-4 justify-center items-center">
				{{ KanbanData.title }}
				<icon
					name="edit"
					class="w-5 cursor-pointer"
					@click="useBoardModal().openEditBoard()"
				/>
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
	<div v-else class="flex flex-col justify-center items-center">
		<lottie-player
			src="https://assets2.lottiefiles.com/packages/lf20_heejrebm.json"
			background="transparent"
			speed="1"
			style="width: 300px; height: 300px"
			loop
			autoplay
		/>
		<h3 class="home-desc text-center">
			You currently do not have permission to view this board
		</h3>
	</div>
</template>

<script setup lang="ts">
import { getBoard, updateData } from '@/composables/board'
import { columns } from '@/helper/data'
import { enableReload, disableReload } from '@/composables/useUtils'
import { useBoardModal } from '@/composables/core/modals'

const id = useRoute().params.id
const { KanbanData, fetchedData } = getBoard()

onMounted(async () => {
	disableReload()
	await fetchedData(id)
})
onUnmounted(enableReload)
</script>

<style scoped></style>
