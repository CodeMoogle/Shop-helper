<template>
	<div class="login container-center flex-column">
		<div class="auth-form">
			<h1>Login</h1>
			<form class="form" @submit.prevent="loginHandler">
				<div class="form__group">
					<input
						type="email"
						name="email"
						id="email"
						class="form__control"
						placeholder="example@gmail.com"
						required
						v-model="email"
					/>
					<label for="email" class="form__label">Email</label>
				</div>

				<div class="form__group">
					<input
						type="password"
						name="password"
						id="password"
						class="form__control"
						placeholder="Password"
						required
						v-model="password"
					/>
					<label for="password" class="form__label">Password</label>
				</div>

				<input type="submit" value="Login" class="btn" />
			</form>

			<p class="user-callout">
				New to ShopHelper ?
				<router-link to="/register">Create an account</router-link>.
			</p>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "Login",
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		...mapActions(["login"]),
		loginHandler() {
			this.login({ email: this.email, password: this.password });
			this.$router.push("/");

			this.email = "";
			this.password = "";
		},
	},
};
</script>

<style lang="scss">
	.login {
		& h1 {
			font-size: 40px;
			margin-bottom: 40px;
		}
		& .btn {
			display: block;
			margin: 0 auto;
			text-transform: uppercase;
			padding: 1em 3em;
		}
	}
</style>