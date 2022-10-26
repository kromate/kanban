<template>
	<transition appear name="slide">
		<div
			v-if="active"
			id="alert"
			class="overflow-hidden max-w-[70%] rounded-md shadow-xl fixed top-8 left-4 p-4  z-[150] text w-[22rem] bg-primary text-clear"
		>
			<div class="h-full w-1.5 bg-inverse absolute left-0 top-0" />
			<svg
				class="w-4 h-4 text-clear absolute right-1 top-0 cursor-pointer text-xl"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				@click="closeAlert"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>

			<p>{{ message }}</p>
		</div>
	</transition>
</template>

<script lang="ts" setup>
import { useAlert } from '~~/src/composables/core/useNotification'

const { active, message, closeAlert } = useAlert()
</script>

<style scoped>
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-30rem);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
</style>
