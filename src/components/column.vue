<template>
	<article class="column">
		<header class="flex items-center justify-between w-full">
			<h1 class="column-title">
				{{ title }}
			</h1>
			<icon
				name="add"
				class="column-card-header-icon"
				@click="demo ? demoMode() : openTicketModal(title)"
			/>
		</header>

		<draggable
			v-model="cardArray"
			group="kanban"
			:item-key="title"
			class="flex flex-col gap-4"
			@change="updateParent"
		>
			<template #item="{ element }">
				<ColumnCard
					:key="element.id"
					:demo="demo"
					:title="title"
					:card="element"
				/>
			</template>
		</draggable>
	</article>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { openTicketModal } from '~~/src/composables/ticket'
import { demoMode } from '@/composables/board'
const emit = defineEmits(['change'])

const updateParent = (e) => {
	emit('change', { type: props.title, data: props.cards })
}
const cardArray = ref([])

onMounted(() => {
	cardArray.value = props.cards
})

// watch(props.cards, () => {
// 	console.log('watching Cards')
// })
// watch(cardArray, () => {
// 	console.log('watching Cards Array')
// })

const props = defineProps({
	title: {
		default: 'default Title',
		type: String
	},
	demo: {
		default: false,
		type: Boolean
	},
	cards: {
		default: () => [],
		type: Array
	}
})
</script>

<style scoped></style>
