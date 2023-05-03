import DAL_Forum from '~/DAL/forum'
export const state = () => ({
    user: {
        id: '',
        login: false,
        session: '',
        thumbnail: ''
    }
})
export const mutations = {
    setUser(state, payload) {
        state.user.id = payload.id
        state.user.login = payload.login
        state.user.session = payload.session
        state.user.thumbnail = payload.thumbnail
    }
}
export const actions = {
    setUser({commit}, payload) {
        localStorage.setItem('currentUser', JSON.stringify(payload))
        commit('setUser', payload)
    },
    async logout({commit}, payload){
        const result = await DAL_Forum.logout(payload)
        if(result.data.confirm === 'ok') {
            const defaultObj = {
                id: '',
                login: false,
                session: '',
                thumbnail: ''
            }
            commit('setUser', defaultObj)
        }
    },
    async checkUser({commit}, payload){
        const result = await DAL_Forum.checkUser(payload)
        return result.data.confirm
    },
    async changePassword({commit}, payload){
        const result = await DAL_Forum.changePassword(payload)
        return result.data.confirm
    },
    async deleteAccount({commit}, payload){
        const result = await DAL_Forum.deleteAccount(payload)
        return result.data.confirm
    }
}
export const getters = {
    getUser(state){
        return state.user
    }
}