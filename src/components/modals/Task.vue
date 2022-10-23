<template>
	<Modal
		modal="$atts.modal"
		:title="ticketState.title.value"
	>
		<form
			class="task-modal"
			@submit.prevent=""
		>
			<div class="field">
				<label for="title" class="modal-label">Title </label>
				<input
					id="title"
					required
					type="text"
					placeholder="Enter Title"
					class="modal-input"
				>
			</div>

			<span class="relative top-0 right-0 block">
				<button

					type="submit"
					class="flex justify-center items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-700 focus:outline-none active:bg-indigo-700"
				>
					Save
				</button>
			</span>
		</form>
	</Modal>
</template>
~~/src/composables/ticket
<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
import { ticketState } from '@/composables/ticket'

</script>

<style>

</style>
