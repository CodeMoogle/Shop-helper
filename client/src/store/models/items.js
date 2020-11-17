import axios from 'axios'
import router from '@/router'

export default {
	state: {
		items: [],
	},
	actions: {
		async fetchItems({ commit }) {
			try {
				const token = localStorage.getItem('auth-token')
				await axios
					.get(`${process.env.VUE_APP_URL}/items/all`, {
						headers: {
							'x-auth-token': token,
						},
					})
					.then(res => commit('fetchItems', res.data))
					.catch(error => console.log('error', error))
			} catch (error) {
				// TODO: set error to state.error
				console.log(error.response.data.msg)
			}
		},
		async addItem({ commit }, item) {
			try {
				const token = localStorage.getItem('auth-token')
				if (token) {
					await axios
						.post(`${process.env.VUE_APP_URL}/items/`, item, {
							headers: { 'x-auth-token': token },
						})
						.then(res => commit('addItem', res.data))
						.catch(error => console.log('error', error))
				}
			} catch (error) {
				// TODO: set error to state.error
				console.log(error.response.data.msg)
			}
		},
	},
	mutations: {
		fetchItems(state, items) {
			state.items = items
		},
		addItem(state, item) {
			console.log('item', item)
			state.items.unshift(item)
		},
	},
	getters: {
		allItems: state => state.items,
	},
}
