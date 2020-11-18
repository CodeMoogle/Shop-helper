import Vue from 'vue'
import Vuex from 'vuex'

// Store modules
import auth from './models/auth'
import notification from './models/notification'
import items from './models/items'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		auth,
		notification,
		items,
	},
})
