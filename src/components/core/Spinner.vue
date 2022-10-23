<template>
	<div id="loading" />
</template>

<script lang="ts" setup></script>

<style>
#loading {
	display: block;
	width: 28px !important;
	height: 28px !important;
	border: 3px solid rgba(255, 255, 255, 0.634);
	border-radius: 50%;
	border-top-color: #fff;
	animation: spin 1s ease-in-out infinite;
	-webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
	to {
		-webkit-transform: rotate(360deg);
	}
}
@-webkit-keyframes spin {
	to {
		-webkit-transform: rotate(360deg);
	}
}
</style>
