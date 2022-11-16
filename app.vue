<template>
	<div>
		<the-header />
		{{ title }}
		<NuxtPage />
	</div>
</template>

<script lang="ts" setup name="app">
import { ref } from 'vue'
const title = ref('jackbrens')
</script>
