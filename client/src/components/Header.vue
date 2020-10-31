<template>
	<header class="app__header">
		<div class="container flex">
			<div class="app__header-logo">
				<Sidebar />
				<router-link to="/">
					<img src="@/assets/logo/brand-logo.png" alt="logo" />
				</router-link>
			</div>

			<div class="app__header-buttons">
				<router-link to="/register" class="btn">Sign up</router-link>
				<router-link to="/login" class="btn">Sign in</router-link>
			</div>
		</div>
	</header>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
	name: "Header",
	components: {
		Sidebar,
	},
};
</script>

<style lang="scss">
	.app__header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 50px;
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
				margin-left: 20px;
				padding-top: 5px;
			}
		}
		&-buttons {
			& .btn {
				margin: 0 10px;
				padding: 5px 10px;
				font-weight: bold;
			}
		}
	}
</style>