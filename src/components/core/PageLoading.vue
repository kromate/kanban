<template>
	<transition name="fade" appear>
		<div v-if="active" class="fixed inset-0 h-screen w-screen bg-white flex justify-center items-center flex-col z-[10000]">
			<div class="waviy text">
				<span style="--i:1">L</span>
				<span style="--i:2">O</span>
				<span style="--i:3">A</span>
				<span style="--i:4">D</span>
				<span style="--i:5">I</span>
				<span style="--i:6">N</span>
				<span style="--i:7">G</span>
			</div>

			<p class="text text-2xl mt-20 text-center max-w-[45rem] px-4">
				{{ message }}
			</p>
		</div>
	</transition>
</template>

<script>
import { useLoading } from '@/composables/useNotification'
export default {
	name: 'LoaderComponent',
	setup() {
		const { active, message } = useLoading()

		return { active, message }
	}
}
</script>

<style scoped>
.fade-enter, .fade-leave-to{
opacity: 0;
}
.fade-enter-active, .fade-leave-active{
	transition: all .35s ease;
}
.waviy {
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0,0,0,.2));
  font-size: 60px;
}
.waviy span {

  position: relative;
  display: inline-block;
  text-transform: uppercase;
  animation: waviy 1s infinite;
  animation-delay: calc(.1s * var(--i));

}
@keyframes waviy {
  0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-20px)
  }
}
</style>
