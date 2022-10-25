<template>
	<main
		class="flex flex-col w-full min-h-screen justify-start items-center bg py-10 px-10"
	>
		<header class="mb-14 w-full text-center mt-4 center-col">
			<h1 class="home-title">
				My Boards
			</h1>
			<p class="home-desc">
				This contains a list of all your boards
			</p>
		</header>

		<transition-group
			v-if="result.length"
			appear
			tag="div"
			class="gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
			@before-enter="beforeEnter"
			@enter="enter"
		>
			<article
				v-for="(board, index) in result"
				:key="board.id"
				:data-index="index"
				class="board"
			>
				<nuxt-link class="text-xl underline mb-2" :to="`/board/${board.id}`">
					{{ board.title }}
				</nuxt-link>
				<p>{{ board.desc }}</p>

				<div class="flex gap-4 mt-4">
					<nuxt-link
						class=" bg-black text-clear px-3 cursor-pointer rounded-md"
						:to="`/timeline/${board.id}`"
					>
						edit
					</nuxt-link>
					<span
						class=" bg-black text-clear px-3 cursor-pointer rounded-md"
						@click="shareBoard(board)"
					>Share</span>
					<span
						class=" bg-black text-clear px-3 cursor-pointer rounded-md"
						@click="delTimeline(board.id)"
					>Delete</span>
				</div>
			</article>
		</transition-group>

		<div v-else class="flex flex-col justify-center items-center">
			<lottie-player
				src="https://assets2.lottiefiles.com/packages/lf20_heejrebm.json"
				background="transparent"
				speed="1"
				style="width: 300px; height: 300px"
				loop
				autoplay
			/>
			<h3 class="home-desc text-center">
				You currently do not have any boards , fix up 👍
			</h3>
			<button class="home-btn !w-auto" @click="useBoardModal().openCreateBoard()">
				Create board
			</button>
		</div>
	</main>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap'
import { useShare, useClipboard } from '@vueuse/core'
import { useUser } from '@/composables/auth/user'
import { useAlert } from '@/composables/core/useNotification'
import { getUserBoard } from '@/composables/board'
import { useBoardModal } from '@/composables/core/modals'
import '@lottiefiles/lottie-player'

definePageMeta({
	layout: 'default',
	middleware: 'is-authenticated'
})

const { fetchedData, result } = getUserBoard()

const source = ref('')
const { copy } = useClipboard({ source })
const { share, isSupported } = useShare()

onMounted(async () => {
	await fetchedData()
})
const copyLink = () => {
	copy()
	useAlert().openAlert(
		'Seems something went wrong while trying to share, don\'t worry we copied it to your clipboard '
	)
}
const shareBoard = (board) => {
	source.value = `${location.href}/${board.id}`
	if (!isSupported) {
		copyLink()
	}
	try {
		share({
			title: board.value.title,
			text: board.value.desc,
			url: source.value
		})
	} catch {
		copyLink()
	}
}

const beforeEnter = (el) => {
	el.style.opacity = 0
	el.style.transform = 'translateY(100px)'
}
const enter = (el, done) => {
	gsap.to(el, {
		opacity: 1,
		y: 0,
		duration: 0.5,
		onComplete: done,
		delay: el.dataset.index * 0.1
	})
}
</script>
