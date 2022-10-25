<template>
	<button class="fixed bottom-6 right-6 z-30 bg-primary text-clear text-xl px-6 py-2 rounded-full" :disabled="loading" @click="updateBoard">
		{{ loading ? 'Updating the board...' : 'Save' }}
	</button>
</template>

<script setup lang="ts">
import { useUpdateBoard } from '@/composables/board'
const { updateBoard, loading } = useUpdateBoard()
</script>
