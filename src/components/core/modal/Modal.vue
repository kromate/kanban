<template>
	<transition name="slide" appear :duration="500">
		<div
			:close="closeModal"
			class="bg transition-all"
		>
			<transition
				appear
				@before-enter="beforeEnter"
				@leave="onLeave"
				@enter="enter"
			>
				<div class="h-60 bg-white   py-4 px-6 rounded-lg overflow-hidden shadow-xl transform transition-all w-full max-w-[76%] sm:max-w-lg ">
					<div class="flex w-full justify-between">
						<div class="flex flex-col items-center relative w-full">
							<div class="w-full flex">
								<a class="las la-times absolute right-[10px] cursor-pointer text-xl" @click.prevent="closeModal" />
								<span class="font-semibold text-2xl text-center w-full">
									{{ title }}
								</span>
							</div>
							<slot />
						</div>
					</div>
				</div>
			</transition>
		</div>
	</transition>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { modal } from '@/composables/core/modals'

const props = defineProps({
	modal: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: false
	}
})

const closeModal = () => {
	modal.close(props.modal)
}
const timeline = gsap.timeline({ defaults: { duration: 0.5 } })
const beforeEnter = (el) => {
			  el.style.opacity = 0
	el.style.transform = 'scale(0.5)'
}
const enter = (el, done) => {
	timeline.to(el, {
		opacity: 1,
		y: 0,
		scale: 1,
		duration: 0.35,
		onComplete: done
	})
}
const onLeave = (el, done) => {
	gsap.to(el, {
		opacity: 0,
		y: 0,
		scale: 0.1,
		duration: 0.35,
		onComplete: done
	})
}

</script>

<style scoped>

.bg {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.40);
  width: 100vw;
  max-width: 100vw;
  min-height: 100%;
  z-index: 1000000;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
}

.slide-enter-active,
.slide-leave-active {
  transition: all .5s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: scale(0);
  opacity: 0
}

</style>
