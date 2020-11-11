import Vue from 'vue'
import Vuex from 'vuex'

// Store modules
import auth from './models/auth'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		auth,
	},
})
