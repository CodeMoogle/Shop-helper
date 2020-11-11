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

				ctx.commit('login', res.data.user, res.data.token)
				// setup token to local storage
				localStorage.setItem('auth-token', res.data.token)
			} catch (error) {
				// TODO: set error to state.error
				console.log(error.response.data.msg)
				console.log(error)
			}
		},
	},
	mutations: {
		login(state, user, token) {
			state.token = token
			state.user = user
		},
	},
	getters: {
		currentUser: state => state.user,
	},
}
