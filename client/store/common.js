export const state = () => ({
    common: {
        showSearch: false
    }
})
export const mutations = {
    setShowSearch(state, data) {
        state.common.showSearch = data
    }
}
export const actions = {
    setShowSearch({commit}, data) {
        commit('setShowSearch', data)
    },
}
export const getters = {
    getShowSearch(state) {
        return state.common.showSearch
    },
}