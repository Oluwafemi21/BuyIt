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
        },
        addToCart(state, payload) {
            state.cart = [...state.cart, payload]
            console.log('item added to cart')
        }
    },
    actions: {
        set_user(context, payload) {
            context.commit('loginUser', payload)
        },
        remove_user(context) {
            context.commit('logoutUser')
        },
        add_to_cart(context, payload) {
            context.commit('addToCart', payload)
        }
    },
    plugins: [createPersistedState()],
})

//export store
export default store