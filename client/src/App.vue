<template>
	<div id="app">
		<Notification />
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
import Notification from "@/components/Notification.vue";

import { mapGetters, mapActions } from "vuex";

export default {
	name: "App",
	components: {
		Header,
		Notification,
	},
	computed: mapGetters(["currentUser"]),
	methods: mapActions(["checkLoggedIn"]),
	mounted() {
		this.checkLoggedIn();
	},
};
</script>

<style lang="scss">
	#app {
		position: relative;
		height: 100%;
		height: 100vh;
		font-size: 16px;
		overflow-x: hidden;
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
