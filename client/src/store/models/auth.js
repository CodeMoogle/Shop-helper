import axios from 'axios'
import router from '@/router'

export default {
	state: {
		user: null,
	},
	actions: {
		async register({ commit }, newUser) {
			const { email, password } = newUser
			try {
				await axios.post(`${process.env.VUE_APP_URL}/users/register`, newUser)
				// autologin after registration
				const userResponse = await axios.post(`${process.env.VUE_APP_URL}/users/login`, { email, password })
				commit('login', userResponse.data.user)

				localStorage.setItem('auth-token', userResponse.data.token)
				router.push('/main', () => {})
			} catch (error) {
				// TODO: set error to state.error
				console.log(error.response.data.msg)
			}
		},
		async login({ commit }, user) {
			try {
				const userResponse = await axios.post(`${process.env.VUE_APP_URL}/users/login`, user)

				commit('login', userResponse.data.user)

				// setup token to local storage
				localStorage.setItem('auth-token', userResponse.data.token)
				router.push('/main', () => {})
			} catch (error) {
				// TODO: set error to state.error
				console.log(error.response.data.msg)
			}
		},
		async checkLoggedIn({ commit }) {
			let token = localStorage.getItem('auth-token')
			if (token === null) {
				localStorage.setItem('auth-token', '')
				token = ''
			}

			const tokenResponse = await axios.post(`${process.env.VUE_APP_URL}/users/tokenIsValid`, null, {
				headers: { 'x-auth-token': token },
			})
			if (tokenResponse.data) {
				const userResponse = await axios.get(`${process.env.VUE_APP_URL}/users/`, {
					headers: { 'x-auth-token': token },
				})
				commit('login', userResponse.data)
			}
		},
		logout({ commit }) {
			commit('logout')
			localStorage.setItem('auth-token', '')
			router.push('/', () => {})
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
