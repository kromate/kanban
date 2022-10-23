<template>
	<Modal
		modal="$atts.modal"
		:title="taskModalState.modal_title.value"
	>
		<form
			class="task-modal"
			@submit.prevent="createTicket"
		>
			<div class="field">
				<label for="title" class="modal-label">Title </label>
				<input
					id="title"
					v-model="taskModalState.title.value"
					required
					type="text"
					placeholder="Enter Title"
					class="modal-input"
				>
			</div>
			<div class="field">
				<label for="description" class="modal-label">Description </label>
				<textarea
					id="description"
					v-model="taskModalState.desc.value"
					required
					rows="3"
					type="text"
					placeholder="Enter Description"
					class="modal-input"
				/>
			</div>
			<div class="field">
				<label for="level" class="modal-label">Level </label>
				<select id="level" v-model="taskModalState.level.value" name="level" class="modal-input" required>
					<option disabled select class="text-line" value="" selected>
						Select Level
					</option>
					<option value="1">
						level 1 (critical)
					</option>
					<option value="2">
						level 2 (important)
					</option>
					<option value="3">
						level 3 (normal)
					</option>
				</select>
			</div>
			<div class="field">
				<label for="assignee" class="modal-label">Assignee </label>
				<input
					id="assignee"
					v-model="taskModalState.assignee.value"
					required
					type="text"
					placeholder="Enter Assignee"
					class="modal-input"
				>
			</div>

			<button class="modal-btn">
				<span v-if="!loading"> {{ taskModalState.modal_title.value.split(' ')[0] }}</span>  <Spinner v-else />
			</button>
		</form>
	</Modal>
</template>
~~/src/composables/ticket
<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
import { useTicket } from '@/composables/ticket'

const { createTicket, loading, taskModalState } = useTicket()
</script>

<style>

</style>
