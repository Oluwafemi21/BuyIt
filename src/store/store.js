import { createStore } from "vuex";

const store = createStore({
    state: {
        user: null
    },
    mutations: {
        loginUser(state, payload) {
            state.user = payload
            console.log('user state changed: ', state.user)
        }
    },
    actions: {
        // async loginUser(context, payload) {}
    }
})

//export store
export default store