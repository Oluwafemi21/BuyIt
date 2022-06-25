import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    state: {
        user: null,
        cart: []
    },
    mutations: {
        loginUser(state, payload) {
            state.user = payload
            console.log('user state changed: ', state.user)
        },
        logoutUser(state) {
            state.user = null
        }
    },
    actions: {
        set_user(context, payload) {
            context.commit('loginUser', payload)
        },
        remove_user(context) {
            context.commit('logoutUser')
        }
    },
    plugins: [createPersistedState()],
})

//export store
export default store