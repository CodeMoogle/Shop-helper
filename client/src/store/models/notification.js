export default {
	state: {
		notification: {
			enabled: true,
			isOpen: false,
			type: 'info',
			text: 'This is notification for you =)',
			timer: 5000,
		},
	},
	mutations: {
		show({ notification }, { text, type = 'info' }) {
			notification.isOpen = true
			notification.type = type
			notification.text = text
		},
		hide({ notification }) {
			notification.isOpen = false
			notification.info = 'info'
			notification.text = ''
		},
	},
	actions: {
		setNotification({ commit, getters }, info) {
			if (getters.notification.enabled) {
				commit('show', info)
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
		notification: state => state.notification,
	},
}
