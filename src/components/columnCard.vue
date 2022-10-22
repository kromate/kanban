<template>
	<div :class="[cardColorPicker(level), 'column-card']">
		<icon name="edit" class="column-card-icon" />
		<h3 class="column-card-title">
			{{ title }}
		</h3>
		<p class="column-card-desc">
			{{ desc }}
		</p>

		<span class="column-card-badge">
			{{ assignee }}
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
		type: Number
	},
	id: {
		type: String,
        required: true
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
