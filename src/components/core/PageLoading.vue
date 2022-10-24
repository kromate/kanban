<template>
	<transition name="fade" appear>
		<div v-if="active" class="flex min-h-screen items-center justify-center flex-col bg-[#2a2828a5] fixed z-50 inset-0 bg">
			<div class="load text-6xl">
				<div>G</div>
				<div>N</div>
				<div>I</div>
				<div>D</div>
				<div>A</div>
				<div>O</div>
				<div>L</div>
			</div>

			<p class="text-2xl absolute mt-40 text-center max-w-[45rem] px-4 text-white">
				{{ message }}
			</p>
		</div>
	</transition>
</template>

<script lang="ts" setup>
import { useLoading } from '@/composables/useNotification'
const { active, message } = useLoading()
</script>

<style scoped>
.bg{
    backdrop-filter: blur(5px);
}

.load {
  position:absolute;
  width:600px;
  height:36px;
  left:50%;
  top:40%;
  margin-left:-300px;
  overflow:visible;
  user-select:none;
  cursor:default;
  font-size: 2rem;
  font-weight: 600;
}

.load div {
  position:absolute;
  width:20px;
  height:36px;
  opacity:0;
  font-family:'Poppins', Arial, sans-serif;
  animation:move 2s linear infinite;
  transform:rotate(180deg);
  font-size: 2.5rem;
  font-weight: 900;
  color:#6CD3FF;
}

.load div:nth-child(2) { animation-delay:0.2s;}
.load div:nth-child(3) { animation-delay:0.4s;}
.load div:nth-child(4) { animation-delay:0.6s;}
.load div:nth-child(5) { animation-delay:0.8s;}
.load div:nth-child(6) { animation-delay:1s;}
.load div:nth-child(7) { animation-delay:1.2s; }

@keyframes move {
  0% {left:0; opacity:0; }
	35% {left: 41%; transform:rotate(0deg);	opacity:1;}
	65% {	left:59%; transform:rotate(0deg); opacity:1;}
	100% {left:100%; 	transform:rotate(-180deg); opacity:0;}
}
</style>
