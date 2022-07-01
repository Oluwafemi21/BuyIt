<template>
    <header>
        <div class="container">
            <nav class="top__navigation">
                <router-link to="/">
                    <h3 class="logo">Buy-It</h3>
                </router-link>

                <div class="nav__links" :class="{ activeNav: showSideNav }">
                    <i class="far fa-times close-btn" @click="hideNav"></i>
                    <router-link @click="hideNav" to="/">Home</router-link>
                    <router-link @click="hideNav" to="/shop">Shop</router-link>
                    <router-link @click="hideNav" to="/blog">Blog</router-link>
                    <router-link @click="hideNav" to="/about"
                        >About</router-link
                    >
                    <router-link @click="hideNav" to="/contact"
                        >Contact</router-link
                    >
                    <router-link
                        @click="hideNav"
                        to="/cart"
                        class="desktop-cart"
                    >
                        <i class="fal fa-shopping-bag"></i>
                        <div class="qty" v-if="cart.length >= 1">
                            <span>{{ cart.length }}</span>
                        </div>
                    </router-link>
                    <template v-if="!user">
                        <router-link
                            @click="hideNav"
                            to="/login"
                            class="auth-link"
                            >Login</router-link
                        >
                        <router-link
                            @click="hideNav"
                            to="/signup"
                            class="auth-link"
                        >
                            <action-button>Sign Up</action-button>
                        </router-link>
                    </template>

                    <button class="log-out auth-link" @click="logout" v-else>
                        Logout
                    </button>
                </div>

                <div class="mobile-menu">
                    <router-link to="/cart" class="mobile-cart">
                        <i class="fal fa-shopping-bag"></i>
                        <div class="qty" v-if="cart.length >= 1">
                            <span>{{ cart.length }}</span>
                        </div>
                    </router-link>
                    <i class="fas fa-bars" @click="showNav"></i>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ActionButton from "./ActionButton.vue";

export default {
    components: { ActionButton },
    name: "MainHeader",
    props: {
        msg: String,
    },
    data() {
        return {
            showSideNav: false,
        };
    },
    methods: {
        ...mapActions(["remove_user"]),
        showNav() {
            this.showSideNav = true;
        },
        hideNav() {
            this.showSideNav = false;
        },
        logout() {
            this.remove_user();
            this.$router.push("/login");
            console.log(this.user);
        },
    },
    computed: {
        ...mapState(["user", "cart"]),
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    background-color: lavender;
    box-shadow: 0 1px 10px 3px rgba(0, 0, 0, 0.03);
    padding-block: 10px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 3;
}

.top__navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    color: var(--dim-blue);
    font-weight: 700;
    letter-spacing: 2px;
}

.nav__links a,
.log-out {
    padding-inline: 15px;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--dark-blue);
    transition: all 0.25s ease-in-out;
    line-height: 2rem;
}

.nav__links .log-out {
    background-color: transparent;
}

a.active__page,
.nav__links a:hover,
.mobile-menu a:hover {
    color: var(--dark-blue);
}

.nav__links {
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav__links a::after,
.mobile-menu a::after {
    content: "";
    display: block;
    position: relative;
    top: 2px;
    height: 2px;
    left: 0;
    width: 0;
    background-color: var(--dark-blue);
    border-radius: 6px;
    transition: width 0.25s ease;
}

.nav__links a:hover::after,
.mobile-menu a:hover::after {
    width: 70%;
}

.nav__links a.router-link-exact-active::after {
    width: 70%;
}

.nav__links .auth-link::after {
    display: none;
}

.desktop-cart {
    display: initial;
    position: relative;
}

.mobile-menu {
    display: none;
}

.close-btn {
    display: none;
    font-size: 2.5rem;
    cursor: pointer;
}

.qty {
    height: 18px;
    width: 18px;
    text-align: center;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--dark-blue);
    font-size: 14px;
    color: white;
    font-weight: 500;
    position: absolute;
    top: -4px;
    right: 4px;
}
/* Media Query */

@media (max-width: 870px) {
    .mobile-menu {
        display: flex;
        align-items: center;
        font-size: 1.9rem;
        gap: 1.5rem;
    }

    .mobile-menu i {
        cursor: pointer;
        color: var(--text);
    }

    .nav__links {
        align-items: flex-start;
        justify-content: flex-start;
        gap: 2.2rem;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: -55%;
        width: 55%;
        z-index: 2;
        padding: 2rem 3rem;
        background-color: white;
        height: 100%;
        box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
        transition: 0.25s;
    }

    .activeNav {
        right: 0;
    }

    .nav__links a,
    .log-out {
        padding: 0.5rem 0;
        font-size: 1.8rem;
    }

    .nav__links a {
        width: 100%;
    }
    .nav__links a:hover::after {
        width: 2.5rem;
    }

    .nav__links a.router-link-exact-active::after {
        width: 2.5rem;
    }

    .close-btn {
        display: initial;
    }

    .desktop-cart {
        display: none;
    }

    .mobile-cart {
        position: relative;
        z-index: 1;
    }
    .qty {
        align-items: center;
    }
}
</style>
