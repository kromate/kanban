<template>
	<main class="w-full h-screen">
		<transition name="slideUp" appear>
			<div
				class="container mx-auto flex flex-col justify-center items-center h-full text-center"
			>
				<header class="mb-8 flex flex-col justify-center items-center">
					<h1 class="home-title title">
						Welcome to Vue KanBan
					</h1>
					<p class="home-desc">
						An OpenSource KanBan board built by Kromate in Vue
					</p>
				</header>

				<div class="w-full flex flex-col justify-center items-center">
					<button v-if="!isLoggedIn" id="signin" class="home-btn" @click="googleSignin">
						Sign in
					</button>

					<button v-if="isLoggedIn" class="home-btn" @click="useBoardModal().openCreateBoard()">
						Create Board
					</button>
					<nuxt-link v-if="isLoggedIn" to="/myboard" class="home-btn">
						My Boards
					</nuxt-link>
					<nuxt-link id="demo-btn" to="/demo" class="home-btn">
						Demo
					</nuxt-link>
					<a
						href="https://github.com/kromate/kanban"
						target="_blank"
						class="home-btn"
					>
						Github
					</a>

					<button v-if="isLoggedIn" class="home-btn mt-4" @click="signOut">
						Sign Out
					</button>
				</div>
			</div>
		</transition>
	</main>
</template>

<script lang="ts" setup>
import { useSignin } from '@/composables/auth/auth'
import { useUser } from '@/composables/auth/user'
import { useBoardModal } from '@/composables/core/modals'
const { googleSignin, signOut } = useSignin()
const { isLoggedIn, user } = useUser()

definePageMeta({
	layout: 'default'
})
</script>
