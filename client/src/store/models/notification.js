export default {
	state: {
		enabled: true,
		isOpen: false,
		text: 'This is notification for you =)',
		timer: 5000,
	},
	mutations: {
		show(state, text) {
			state.isOpen = true
			state.text = text
		},
		hide(state) {
			state.isOpen = false
			state.text = ''
		},
	},
	actions: {
		setNotification({ commit, getters }, text) {
			if (getters.notification.enabled) {
				commit('show', text)
				setTimeout(() => {
					if (getters.notification.isOpen) {
						commit('hide')
					} else {
						return
					}
				}, getters.notification.timer)
			}
		},
		closeNotification({ commit }) {
			commit('hide')
		},
	},
	getters: {
		notification: state => state,
	},
}
