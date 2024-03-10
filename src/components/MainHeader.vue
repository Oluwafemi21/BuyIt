<template>
    <header>
        <div class="container">
            <nav class="top__navigation">
                <router-link to="/">
                    <h3 class="logo">S-Mart</h3>
                </router-link>

                <div class="nav__links" :class="{ activeNav: showSideNav }">
                    <svg
                        @click="hideNav"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-x-lg close-btn"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                        />
                    </svg>
                    <router-link @click="hideNav" to="/">Home</router-link>
                    <router-link @click="hideNav" to="/shop">Products</router-link>
                    <router-link @click="hideNav" to="/about"
                        >About</router-link
                    >
                    <router-link @click="hideNav" to="/contact"
                        >Contact</router-link>                    
                </div>

                <div class="mobile-menu">
                    <svg
                        @click="showNav"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-list open-btn"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        />
                    </svg>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
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
            showDropDown: false,
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
        },
    },
    computed: {
        ...mapState(["user", "cart"]),
        ...mapGetters(["getHash"]),
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

.nav__links .auth-link::after,
.dropdown .dropdown-link::after {
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
    font-size: 2.1rem;
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

.nav-profile {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    margin-left: 15px;
    background: transparent;
}

.nav-profile img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
}

.nav-profile .name {
    font-size: 1.8rem;
}

.nav-profile svg {
    font-size: 1.8em;
    cursor: pointer;
    font-weight: 900;
}

.dropdown {
    background-color: white;
    z-index: 2;
    border-radius: 8px;
    border: 1px solid var(--grey-2);
    position: absolute;
    top: 35px;
    right: 0;
    transition: 0.25s;
    width: 170px;
}

.dropdown-profile {
    padding: 10px;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-bottom: 1px solid var(--grey-2);
}

.dropdown svg {
    font-size: 1.6rem;
    cursor: pointer;
    font-weight: 900;
}

.dropdown .dropdown-logout {
    font-size: 1.7rem;
}

.dropdown .dropdown-link {
    font-size: 1.6rem;
    color: #222;
    background-color: transparent;
    padding: 10px;
    width: 100%;
    transition: background-color 0.25s;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 18px;
    font-weight: 400;
}

.dropdown .dropdown-link:hover {
    color: var(--dark-green);
}

.dropdown-name {
    font-weight: 500;
}

.log-out {
    display: none;
}

/* Media Query */

@media (max-width: 870px) {
    .mobile-menu {
        display: flex;
        gap: 1.5rem;
        color: var(--text);
    }

    .mobile-menu svg {
        cursor: pointer;
        font-size: 2rem;
    }

    .mobile-menu .open-btn {
        font-size: 2.4rem;
        font-weight: 900;
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
    .log-out {
        display: initial;
    }
    .nav-profile {
        display: none;
    }
}
</style>
