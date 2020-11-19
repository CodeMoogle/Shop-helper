<template>
	<div class="register container-center flex-column">
		<div class="auth-form">
			<h1>Register</h1>

			<form class="form" @submit.prevent="registerHandler">
				<div class="form__group">
					<input
						type="text"
						name="displayName"
						id="RegDisplayname"
						class="form__control"
						placeholder="Chuck Norris"
						v-model="displayName"
					/>
					<label for="RegDisplayname" class="form__label">Username</label>
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
						name="passwordCheck"
						id="RegpasswordCheck"
						class="form__control"
						placeholder="Password"
						required
						v-model="passwordCheck"
					/>
					<label for="RegpasswordCheck" class="form__label"
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
import { mapActions } from "vuex";

export default {
	name: "Register",
	data() {
		return {
			displayName: "",
			email: "",
			password: "",
			passwordCheck: "",
		};
	},
	methods: {
		...mapActions(["register"]),
		registerHandler() {
			this.register({
				displayName: this.displayName.trim(),
				email: this.email.trim(),
				password: this.password.trim(),
				passwordCheck: this.passwordCheck.trim(),
			});
			this.displayName = "";
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