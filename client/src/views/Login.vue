<template>
	<div class="login container-page flex-column">
		<h1>Login</h1>
		<form class="form" @submit.prevent="loginHandler">
			<div class="form-group">
				<input
					type="email"
					name="email"
					id="email"
					class="form-control"
					placeholder="example@gmail.com"
					required
					v-model="email"
				/>
				<label for="email" class="form-label">Email</label>
			</div>

			<div class="form-group">
				<input
					type="password"
					name="password"
					id="password"
					class="form-control"
					placeholder="Password"
					required
					v-model="password"
				/>
				<label for="password" class="form-label">Password</label>
			</div>

			<input type="submit" value="Login" class="btn" />
		</form>
	</div>
</template>

<script>
export default {
	name: "Login",
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		loginHandler() {
			console.log("login");
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