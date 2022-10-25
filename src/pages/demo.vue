<template>
	<div>
		<header class="flex flex-col px-4">
			<h1 class="board-title">
				{{ dummyData.title }}
			</h1>
			<h3 class="board-desc">
				{{ dummyData.desc }}
			</h3>
		</header>
		<main class="grid grid-cols-4 gap-6 justify-center items-start">
			<Column
				v-for="column in columns"
				:key="column.title"
				:title="column.title"
				:cards="dummyData[column.id]"
				:demo="true"
				@change="updateData"
			/>
		</main>
	</div>
</template>

<script setup lang="ts">
import { dummyData, keys, updateData, columns } from '@/helper/data'

definePageMeta({
	layout: 'default'
})

</script>

<style scoped></style>
