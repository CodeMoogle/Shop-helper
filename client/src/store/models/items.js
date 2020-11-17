import axios from 'axios'
import router from '@/router'

export default {
	state: {
		items: [],
	},
	actions: {
		async fetchItems({ commit }) {
			try {
				const itemsResponse = await axios.get(`${process.env.VUE_APP_URL}/items/all`, {
					headers: { 'x-auth-token': token },
				})
				commit('fetchItems', itemsResponse)
			} catch (error) {
				// TODO: set error to state.error
				console.log(error.response.data.msg)
			}
		},
		async addItem(ctx, item) {
			try {
				const token = localStorage.getItem('auth-token')

				if (token) {
					await axios.post(`${process.env.VUE_APP_URL}/items/`, item, {
						headers: { 'x-auth-token': token },
					})
				}
			} catch (error) {
				// TODO: set error to state.error
				console.log(error.response.data.msg)
			}
		},
	},
	mutations: {
		fetchItems(items) {
			this.items = items
		},
		addItem(item) {
			this.items.unshift(item)
		},
	},
	getters: {
		allItems: state => state.items,
	},
}
