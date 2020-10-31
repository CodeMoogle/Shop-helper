<template>
	<div id="app">
		<Header />
		<section class="app__content">
			<router-view />
		</section>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
	name: "App",
	components: {
		Header,
	},
};
</script>

<style lang="scss">
	body {
		background-color: var(--primary-color);
	}
</style>
