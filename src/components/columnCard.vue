<template>
	<div :class="[cardColorPicker(card.level), 'column-card']">
		<icon name="edit" class="column-card-icon" @click="openEditTicket(card, title)" />
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
import { useEditTicket } from '@/composables/ticket'

const { openEditTicket, loading } = useEditTicket()

defineProps({
	title: {
		default: 'Default Title',
		type: String
	},
	card: {
		default: () => {},
		type: Object
	}

})

const cardColorPicker = (data:number) => {
	switch (data) {
		case 1:{
			return 'bg-red'
		}
		case 2:{
			return 'bg-purple'
		}
		case 3:{
			return 'bg-green'
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
