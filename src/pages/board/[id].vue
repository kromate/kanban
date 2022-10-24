<template>
	<div class="text-clear">
		{{ KanbanData }}
	</div>
</template>

<script setup lang="ts">
import { getBoard } from '@/composables/board'

const id = useRoute().params.id
const { KanbanData, fetchedData } = getBoard()

onMounted(async () => {
	await fetchedData(id)
})
</script>

<style scoped></style>
