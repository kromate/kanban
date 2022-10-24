<template>
	<transition name="slide" appear :duration="500">
		<div
			:close="closeModal"
			class="bg-modal transition-all"
			@click="close"
		>
			<div class="modal">
				<header class="modal-title flex justify-between w-full items-center">
					{{ title }}
					<icon name="close" class="text-white w-7 cursor-pointer" @click="closeModal()" />
				</header>
				<div class="w-full">
					<slot />
				</div>
			</div>
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
		default: 'Default Title',
		type: String,
		required: false
	}
})

const close = (e) => {
if (typeof e.target.className === 'string' && e.target.className.includes('bg-modal')) return closeModal()
}

const closeModal = () => {
	modal.close(props.modal)
}

</script>

<style scoped>

.bg-modal {
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
  backdrop-filter: blur(1.5px);

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
