export const state = () => ({
	userActivity: {
		changePassword: false,
		changeEmail: false,
		deleteAccount: false,
		statusMenu: false
	}
})
export const mutations = {
	changeStatePassword(state) {
		state.userActivity.changePassword = !state.userActivity.changePassword
	},
	changeStateEmail(state) {
		state.userActivity.changeEmail = !state.userActivity.changeEmail
	},
	changeStateDeleteAccount(state) {
		state.userActivity.deleteAccount = !state.userActivity.deleteAccount
	},
	changeStateStatusMenu(state) {
		state.userActivity.statusMenu = !state.userActivity.statusMenu
	},
	setDefaultState(state) {
		state.userActivity.statusMenu = false
		state.userActivity.changePassword = false
		state.userActivity.changeEmail = false
		state.userActivity.deleteAccount = false
	}
}
export const actions = {
	changeStatePassword({ commit }) {
		commit('changeStatePassword')
	},
	changeStateEmail({ commit }) {
		commit('changeStateEmail')
	},
	changeStateDeleteAccount({ commit }) {
		commit('changeStateDeleteAccount')
	},
	changeStateStatusMenu({ commit }) {
		commit('changeStateStatusMenu')
	},
	setDefaultState({ commit }) {
		commit('setDefaultState')
	}
}
export const getters = {
	getChangePassword(state) {
		return state.userActivity.changePassword
	},
	getChangeEmail(state) {
		return state.userActivity.changeEmail
	},
	getDeleteAccount(state) {
		return state.userActivity.deleteAccount
	},
	getStatusMenu(state) {
		return state.userActivity.statusMenu
	}
}
