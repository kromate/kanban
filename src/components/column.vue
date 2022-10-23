<template>
	<article class="column">
		<header class="flex items-center justify-between w-full">
			<h1 class="column-title">
				{{ title }}
			</h1>
			<icon name="add" class="column-card-header-icon" />
		</header>

		<draggable v-model="cards" group="kanban" :item-key="title" class="flex flex-col gap-4" @change="updateParent">
			<template #item="{element}">
				<ColumnCard
					:id="element.id"
					:key="element.id"
					:title="element.title"
					:desc="element.desc"
					:level="element.level"
					:assignee="element.assignee"
				/>
			</template>
		</draggable>
	</article>
</template>

<script setup lang="ts">
const emit = defineEmits(['change'])
const updateParent = (e) => {
	emit('change', { type: props.title, data: e })
}
const props = defineProps({
	title: {
		default: 'default Title',
		type: String
	},
	cards: {
		default: () => [],
		type: Array
	}
})
</script>

<style scoped>

</style>
