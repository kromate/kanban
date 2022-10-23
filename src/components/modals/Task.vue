<template>
	<Modal
		modal="$atts.modal"
		title="Save Page"
	>
		<form
			class="relative flex items-center max-w-sm w-full mx-auto mt-12 overflow-hidden text-center rounded-md border-2 border-primary"
			@submit.prevent="savepageBlock"
		>
			<input
				v-model="pageTitle"
				required
				type="text"
				name="search"
				placeholder="Title of Page"
				class="w-full h-12 px-3 py-2 font-medium text-indigo-800 focus:outline-none"
			>
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

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'

import { savepageBlock, pageTitle } from '@/firebase/firestore'

</script>

<style>

</style>
