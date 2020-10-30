<template>
	<div class="register container-page flex-column">
		<h1>Register</h1>

		<form class="form" @submit.prevent="loginHandler">
			<div class="form-group">
				<input
					type="text"
					name="username"
					id="RegUsername"
					class="form-control"
					placeholder="Chuck Norris"
					v-model="username"
				/>
				<label for="RegUsername" class="form-label">Username</label>
			</div>

			<div class="form-group">
				<input
					type="email"
					name="email"
					id="RegEmail"
					class="form-control"
					placeholder="example@gmail.com"
					required
					v-model="email"
				/>
				<label for="RegEmail" class="form-label">Email*</label>
			</div>

			<div class="form-group">
				<input
					type="password"
					name="password"
					id="RegPassword"
					class="form-control"
					placeholder="Password"
					required
					v-model="password"
				/>
				<label for="RegPassword" class="form-label">Password*</label>
			</div>

			<div class="form-group">
				<input
					type="password"
					name="password-confirm"
					id="RegPasswordConfirm"
					class="form-control"
					placeholder="Password"
					required
					v-model="passwordConfirm"
				/>
				<label for="RegPasswordConfirm" class="form-label"
					>Confirm Password*</label
				>
			</div>

			<input type="submit" value="Register" class="btn" />
		</form>
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
			passwordConfirm: "",
		};
	},
	methods: {
		registerHandler() {
			console.log("register");
			this.username = "";
			this.email = "";
			this.password = "";
			this.passwordConfirm = "";
		},
	},
};
</script>

<style lang="scss">
	.register {
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