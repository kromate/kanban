<template>
	<article class="column">
		<header class="flex items-center justify-between w-full">
			<h1 class="column-title">
				{{ title }}
			</h1>
			<icon name="add" class="column-card-header-icon" />
		</header>

		<draggable :list="cards" group="kanban" :item-key="title" class="flex flex-col gap-4" @change="log">
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
 const log = (e) => {
  console.log(e)
}

 const list1 = [
        { name: 'John', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 }
      ]
 const list2 = [
        { name: 'Juan', id: 5 },
        { name: 'Edgard', id: 6 },
        { name: 'Johnson', id: 7 }
      ]
defineProps({
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
