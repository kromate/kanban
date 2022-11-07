<template>
	<Modal
		modal="$atts.modal"
		title="Create Board"
	>
		<form
			class="task-modal"
			@submit.prevent="createBoard"
		>
			<div class="field">
				<label for="title" class="modal-label">Title </label>
				<input
					id="title"
					v-model="formBoardData.title.value"
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
					v-model="formBoardData.desc.value"
					required
					rows="3"
					type="text"
					placeholder="Enter Description"
					class="modal-input"
				/>
			</div>

			<div class="field">
				<label for="level" class="modal-label">Privacy</label>
				<select id="level" v-model="formBoardData.private.value" name="level" class="modal-input" required>
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

			<button class="modal-btn" :disabled="loading">
				<span v-if="!loading"> Create</span>  <Spinner v-else />
			</button>
		</form>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
import { useCreateBoard } from '@/composables/board'

const { createBoard, loading, formBoardData } = useCreateBoard()
</script>

<style>

</style>
