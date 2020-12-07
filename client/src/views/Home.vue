<template>
	<section class="home">
		<div class="container-page flex_column">
			<h2 class="home__title">Welcome to ShopHelper App</h2>

			<div class="home__actions" v-if="!this.currentUser">
				<p class="home__actions-text">To continue, register or log in.</p>
				<router-link to="/register" class="btn"> Sign up </router-link>
				<router-link to="/login" class="btn"> Sign in </router-link>
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "Home",
	computed: mapGetters(["currentUser"]),
};
</script>

<style lang="scss">
	.home {
		&__title {
			font-size: 1.5rem;
			font-weight: bold;
			margin-bottom: 4rem;
		}
		&__actions {
			width: 100%;
			text-align: center;
			&-text {
				font-size: 1.2rem;
				margin-bottom: 1rem;
			}
			& a {
				margin: 0 1rem;
			}
		}
	}
</style>