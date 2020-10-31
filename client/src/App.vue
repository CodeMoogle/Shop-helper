<template>
	<div id="app">
		<Header />

		<section class="app__content">
			<transition name="component-fade" mode="out-in">
				<router-view />
			</transition>
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

	.component-fade-enter-active,
	.component-fade-leave-active {
		transition: opacity 0.3s ease;
	}
	.component-fade-enter,
	.component-fade-leave-to {
		opacity: 0;
	}
</style>
