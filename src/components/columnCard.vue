<template>
	<div v-for="card in dummyData.backlog" :key="card.id" :class="[cardColorPicker(card.level), 'column-card']">
		<icon name="edit" class="column-card-icon" />
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
defineProps({
	title: {
		default: 'default Title',
		type: String
	},
	desc: {
		default: 'default Desc',
		type: String
	},
	assignee: {
		default: 'default assignee',
		type: String
	},
	level: {
		default: 1,
		type: number
	},
	id: {
		type: String,
        required: true
	}
})
</script>

<style lang="scss" scoped>

</style>
