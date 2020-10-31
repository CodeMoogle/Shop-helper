<template>
	<header class="app__header">
		<div class="container flex">
			<h1 class="app__header-logo">
				<router-link to="/">
					<img src="@/assets/logo/brand-logo.png" alt="logo" />
				</router-link>
			</h1>
			<div class="app__header-buttons">
				<router-link to="/register" class="btn">Sign up</router-link>
				<router-link to="/login" class="btn">Sign in</router-link>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
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
		& .flex {
			justify-content: space-between;
		}
		&-logo {
			height: 100%;
			& img {
				width: auto;
				height: 45px;
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