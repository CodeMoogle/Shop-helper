import axios from 'axios'

export default {
	state: {
		token: null,
		user: null,
	},
	actions: {
		async login(ctx, user) {
			try {
				const res = await axios.post(
					`${process.env.VUE_APP_URL}/users/login`,
					user
				)
				console.log(res)

				ctx.commit('login', res.data.user)
				// setup token to local storage
				localStorage.setItem('auth-token', res.data.token)
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
	},
	mutations: {
		login(state, user) {
			state.user = user
		},
	},
	getters: {
		currentUser: state => state.user,
	},
}
