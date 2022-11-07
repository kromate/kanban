<template>
	<Modal
		modal="$atts.modal"
		title="Edit Board"
	>
		<form
			class="task-modal"
			@submit.prevent="useBoardModal().closeEditBoard()"
		>
			<div class="field">
				<label for="title" class="modal-label">Title </label>
				<input
					id="title"
					v-model="KanbanData.title"
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
					v-model="KanbanData.desc"
					required
					rows="3"
					type="text"
					placeholder="Enter Description"
					class="modal-input"
				/>
			</div>

			<div class="field">
				<label for="level" class="modal-label">Privacy</label>
				<select id="level" v-model="KanbanData.private" name="level" class="modal-input" required>
					<option disabled select class="text-line" value="" selected>
						Select Privacy
					</option>
					<option value="false">
						Public
					</option>
					<option value="true">
						Private
					</option>
				</select>
			</div>

			<button class="modal-btn">
				<span> Create</span>
			</button>
		</form>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
import { KanbanData, useCreateBoard } from '@/composables/board'
import { useBoardModal } from '@/composables/core/modals'

</script>
