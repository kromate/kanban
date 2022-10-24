<template>
	<Modal
		modal="$atts.modal"
		:title="taskModalState.modal_title.value"
	>
		<p class="text-clear text-lg tracking-[0.1rem] ">
			Are you sure you want to delete this ticket?
		</p>

		<div class="grid grid-cols-2 gap-4">
			<button class="modal-btn" @click="useTicketModal().closeDeleteConfirmation()">
				Cancel
			</button>
			<button class="modal-btn bg-red" @click="deleteTicket">
				Delete
			</button>
		</div>
	</Modal>
</template>
~~/src/composables/ticket
<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
import { useDeleteTicket } from '@/composables/ticket'
import { useTicketModal } from '@/composables/core/modals'

const { deleteTicket, loading, taskModalState } = useDeleteTicket()
</script>

<style>

</style>
