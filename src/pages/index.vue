<template>
	<header>
		<h1 class="board-title">
			{{ dummyData.title }}
		</h1>
	</header>
	<main class="grid grid-cols-4 gap-6 justify-center items-start">
		<article class="column">
			<header class="flex items-center justify-between w-full">
				<h1 class="column-title">
					Backlog
				</h1>
				<icon name="add" class="column-card-header-icon" />
			</header>

			<ColumnCard
				v-for="card in dummyData.backlog"
				:id="card.id"
				:key="card.id"
				:title="card.title"
				:desc="card.desc"
				:level="card.level"
				:assignee="card.assignee"
			/>
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
		</article>

		<article class="column">
			<header class="flex items-center justify-between w-full">
				<h1 class="column-title">
					To do
				</h1>
				<icon name="add" class="column-card-header-icon" />
			</header>
			<div v-for="card in dummyData.todo" :key="card.id" :class="[cardColorPicker(card.level), 'column-card']">
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
		</article>
		<article class="column">
			<header class="flex items-center justify-between w-full">
				<h1 class="column-title">
					In progress
				</h1>
				<icon name="add" class="column-card-header-icon" />
			</header>
			<div v-for="card in dummyData.inprogress" :key="card.id" :class="[cardColorPicker(card.level), 'column-card']">
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
		</article>
		<article class="column">
			<header class="flex items-center justify-between w-full">
				<h1 class="column-title">
					Done
				</h1>
				<icon name="add" class="column-card-header-icon" />
			</header>
			<div v-for="card in dummyData.done" :key="card.id" :class="[cardColorPicker(card.level), 'column-card']">
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
		</article>
	</main>
</template>

<script setup lang="ts">
import { ColumnCard } from '../../.nuxt/components'
import { dummyData } from '@/helper/data'

definePageMeta({
	layout: 'default'
})

const cardColorPicker = (data:number) => {
	console.log(data)
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

<style scoped></style>
