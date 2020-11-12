import axios from 'axios'

export default {
	state: {
		user: null,
	},
	actions: {
		async login(ctx, user) {
			try {
				const userResponse = await axios.post(
					`${process.env.VUE_APP_URL}/users/login`,
					user
				)

				ctx.commit('login', userResponse.data.user)

				// setup token to local storage
				localStorage.setItem('auth-token', userResponse.data.token)
			} catch (error) {
				// TODO: set error to state.error
				console.log(error.response.data.msg)
			}
		},
		async checkLoggedIn(ctx) {
			let token = localStorage.getItem('auth-token')
			if (token === null) {
				localStorage.setItem('auth-token', '')
				token = ''
			}

			const tokenResponse = await axios.post(
				'http://localhost:5000/users/tokenIsValid',
				null,
				{ headers: { 'x-auth-token': token } }
			)
			if (tokenResponse.data) {
				const userResponse = await axios.get('http://localhost:5000/users/', {
					headers: { 'x-auth-token': token },
				})
				ctx.commit('login', userResponse.data)
			}
		},
		logout(ctx) {
			ctx.commit('logout')
			localStorage.setItem('auth-token', '')
		},
	},
	mutations: {
		login(state, user) {
			state.user = user
		},
		logout(state) {
			state.user = null
		},
	},
	getters: {
		currentUser: state => state.user,
	},
}
