<template>
	<header class="app__header">
		<div class="container flex">
			<div class="app__header-logo">
				<Sidebar />
				<router-link to="/">
					<img src="@/assets/logo/brand-logo.png" alt="logo" />
				</router-link>
			</div>

			<div class="app__header-login-buttons" v-if="!this.currentUser">
				<router-link to="/register" class="btn btn_outline">
					Sign up
				</router-link>

				<router-link to="/login" class="btn btn_outline"> Sign in </router-link>
			</div>

			<div class="app__header-buttons" v-if="this.currentUser">
				<span>{{ this.currentUser.email }}</span>
				<div @click="this.logout" class="btn btn_outline">Logout</div>
			</div>
		</div>
	</header>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

import { mapGetters, mapActions } from "vuex";

export default {
	name: "Header",
	components: {
		Sidebar,
	},
	computed: mapGetters(["currentUser"]),
	methods: mapActions(["logout"]),
};
</script>

<style lang="scss">
	.app__header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: $header-height;
		background-color: var(--secondary-color);
		box-shadow: 0 4px 6px -6px var(--dark-color);
		z-index: 100;
		& .flex {
			justify-content: space-between;
		}
		&-logo {
			display: flex;
			align-items: center;
			height: 100%;
			& img {
				width: auto;
				height: 45px;
				margin-left: 30px;
				padding-top: 5px;
			}
		}
		& .btn {
			margin: 0 5px;
			padding: 5px 10px;
			font-weight: bold;
		}
	}
	@media (max-width: $xs-phones) {
		.app__header {
			&-login-buttons .btn:first-child {
				display: none;
			}
			&-buttons > span {
				display: none;
			}
		}
	}
</style>