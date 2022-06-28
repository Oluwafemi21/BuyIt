import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state: {
        user: null,
        cart: [],
    },
    mutations: {
        loginUser(state, payload) {
            state.user = payload;
            console.log("user state changed: ", state.user);
        },
        logoutUser(state) {
            state.user = null;
        },
        addToCart(state, payload) {
            if (state.cart.length != 0) {
                //check if the item is in the cart
                let item = state.cart.find(
                    (item) =>
                        item._id === payload._id
                );

                //if the item is in the cart and has the same id and size, increase the quantity
                if (item) {
                    if (item.size === payload.size) {
                        //if the item's quantity is less than 10 add more
                        if (item.quantity < 10) {
                            item.quantity += payload.quantity;
                        } else if (item.quantity >= 10) { //if the item is already 10, don't add more
                            item.quantity = 10;
                        }
                    } else { //if the item exists but has a different size, add the new item
                        console.log("different size");
                        state.cart = [...state.cart, payload];
                    }
                } else { //if the item is not in the cart, add it
                    state.cart = [...state.cart, payload];
                }
            } else { //if the cart is empty, add the item
                state.cart = [...state.cart, payload];
            }
        },
        deleteItem(state, payload) {
            let index = state.cart.indexOf(payload);
            state.cart.splice(index, 1)
        },
        //update the quantity of the item in the cart
        updateQuantity(state, payload) {
            // increase the quantity of the item in the cart
            if (payload.quantity > 0) {
                console.log(payload)
                let item = state.cart.find(
                    (item) =>
                        (item._id === payload._id && item.size === payload.size)
                );
                item.quantity = payload.quantity;
            }
        }
    },
    actions: {
        set_user(context, payload) {
            context.commit("loginUser", payload);
        },
        remove_user(context) {
            context.commit("logoutUser");
        },
        add_to_cart(context, payload) {
            context.commit("addToCart", payload);
        },
        delete_item(context, payload) {
            context.commit("deleteItem", payload);
        },
        update_quantity(context, payload) {
            context.commit("updateQuantity", payload);
        }
    },
    getters: {
        subtotal: state => {
            let subtotal = 0;
            state.cart.forEach(item => {
                subtotal += item.price * item.quantity;
            });
            return subtotal;
        }
    },
    plugins: [createPersistedState()],
});

//export store
export default store;
