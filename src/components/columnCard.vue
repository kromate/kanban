<template>
	<div :class="[cardColorPicker(card.level), 'column-card']">
		<icon
			name="edit"
			class="column-card-icon"
			@click="demo ? demoMode() : openEditTicket(card, title)"
		/>
		<icon
			name="delete"
			class="column-card-icon-del"
			@click="demo ? demoMode() : openDeleteTicket(card, title)"
		/>
		<h3 class="column-card-title">
			{{ card.title }}
		</h3>
		<p class="column-card-desc">
			{{ card.desc }}
		</p>

		<span class="column-card-badge">
			{{ card.assignee }}
		</span>
	</div>
</template>

<script lang="ts" setup>
import { useEditTicket, useDeleteTicket } from '@/composables/ticket'
import { demoMode } from '@/composables/board'

const { openEditTicket, loading } = useEditTicket()
const { openDeleteTicket } = useDeleteTicket()

defineProps({
	title: {
		default: 'Default Title',
		type: String
	},
	card: {
		default: () => {},
		type: Object
	},
	demo: {
		default: false,
		type: Boolean
	}
})

const cardColorPicker = (data: number) => {
	switch (data) {
		case 1: {
			return 'bg-red'
		}
		case 2: {
			return 'bg-purple'
		}
		case 3: {
			return 'bg-green'
		}
	}
}
</script>

<style lang="scss" scoped></style>
