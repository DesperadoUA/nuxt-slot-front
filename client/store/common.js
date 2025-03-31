export const state = () => ({
	common: {
		showSearch: false,
		mobileMenu: false,
        headers: undefined,
        url: undefined
	}
})
export const mutations = {
	setShowSearch(state, data) {
		state.common.showSearch = data
	},
	setMobileMenu(state, data) {
		state.common.mobileMenu = data
	},
    setHeaders(state, data) {
        state.common.headers = data
    },
    setUrl(state, url) {
        state.common.url = url
    }
}
export const actions = {
	setShowSearch({ commit }, data) {
		commit('setShowSearch', data)
	},
	setMobileMenu({ commit }, data) {
		commit('setMobileMenu', data)
	},
    setHeaders({ commit }, data) {
        commit('setHeaders', data)
    },
    setUrl({ commit }, url) {
        commit('setUrl', url)
    }
}
export const getters = {
	getShowSearch(state) {
		return state.common.showSearch
	},
	getMobileMenu(state) {
		return state.common.mobileMenu
	},
    getHeaders(state) {
        return state.common.headers
    },
    getUrl(state) {
        return state.common.url
    }
}
