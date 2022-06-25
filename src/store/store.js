import { createStore } from "vuex";

const store = createStore({
    state: {
        user: null,
        cart: []
    },
    mutations: {
        loginUser(state, payload) {
            state.user = payload
            console.log('user state changed: ', state.user)
        }
    },
    actions: {
        set_user(context, payload) {
            context.commit('loginUser', payload)
        },
    
    }
})

//export store
export default store