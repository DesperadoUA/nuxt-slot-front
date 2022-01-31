import DAL_Forum from '~/DAL/forum'
export const state = () => ({
    userActivity: {
        changePassword: false,
        changeEmail: false
    }
})
export const mutations = {
    changeStatePassword(state) {
      state.userActivity.changePassword = !state.userActivity.changePassword
    },
    changeStateEmail(state) {
        state.userActivity.changeEmail = !state.userActivity.changeEmail
    }
}
export const actions = {
    changeStatePassword({commit}){
        commit('changeStatePassword')
    },
    changeStateEmail({commit}){
        commit('changeStateEmail')
    }
}
export const getters = {
    getChangePassword(state){
        return state.userActivity.changePassword
    },
    getChangeEmail(state){
        return state.userActivity.changeEmail
    }
}