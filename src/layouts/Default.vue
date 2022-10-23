
<template>
	<div class="p-5">
		<slot />
		<ModalBase />
	</div>
</template>

<script setup lang="ts">
import { ModalBase } from '../../.nuxt/components'
</script>

<style scoped></style>
