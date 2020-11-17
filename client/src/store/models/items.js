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
		async deleteItem({ commit }, id) {
			try {
				const token = localStorage.getItem('auth-token')
				if (token) {
					await axios
						.delete(`${process.env.VUE_APP_URL}/items/${id}`, {
							headers: { 'x-auth-token': token },
						})
						.catch(error => console.log('error', error))
					commit('deleteItem', id)
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
			state.items.unshift(item)
		},
		deleteItem(state, id) {
			state.items = state.items.filter(item => item._id !== id)
		},
	},
	getters: {
		allItems: state => state.items,
	},
}
