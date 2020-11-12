<template>
	<div class="register container-center flex-column">
		<div class="auth-form">
			<h1>Register</h1>

			<form class="form" @submit.prevent="loginHandler">
				<div class="form__group">
					<input
						type="text"
						name="username"
						id="RegUsername"
						class="form__control"
						placeholder="Chuck Norris"
						v-model="username"
					/>
					<label for="RegUsername" class="form__label">Username</label>
				</div>

				<div class="form__group">
					<input
						type="email"
						name="email"
						id="RegEmail"
						class="form__control"
						placeholder="example@gmail.com"
						required
						v-model="email"
					/>
					<label for="RegEmail" class="form__label">Email*</label>
				</div>

				<div class="form__group">
					<input
						type="password"
						name="password"
						id="RegPassword"
						class="form__control"
						placeholder="Password"
						required
						v-model="password"
					/>
					<label for="RegPassword" class="form__label">Password*</label>
				</div>

				<div class="form__group">
					<input
						type="password"
						name="password-confirm"
						id="RegPasswordConfirm"
						class="form__control"
						placeholder="Password"
						required
						v-model="passwordCheck"
					/>
					<label for="RegPasswordConfirm" class="form__label"
						>Confirm Password*</label
					>
				</div>

				<input type="submit" value="Register" class="btn" />
			</form>

			<p class="user-callout">
				Already have an account ?
				<router-link to="/login">Sign in</router-link>.
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Register",
	data() {
		return {
			username: "",
			email: "",
			password: "",
			passwordCheck: "",
		};
	},
	methods: {
		registerHandler() {
			console.log("register");
			this.username = "";
			this.email = "";
			this.password = "";
			this.passwordCheck = "";
		},
	},
};
</script>

<style lang="scss">
	.register {
		& .btn {
			display: block;
			margin: 0 auto;
			text-transform: uppercase;
			padding: 1em 3em;
		}
	}
</style>