<template>
    <section class="login grid-center">
        <div class="login-box">
            <router-link to="/">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                    />
                </svg>
            </router-link>
            <h3>Buy-It</h3>
            <form @submit.prevent="loginUser">
                <input
                    type="email"
                    v-model="email"
                    required
                    placeholder="Email"
                />
                <div class="form-group">
                    <input
                        :type="showPassword ? 'text' : 'password'"
                        v-model="password"
                        required
                        placeholder="Password"
                    />

                    <svg
                        @click="togglePassword"
                        v-if="showPassword"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-eye"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                        />
                        <path
                            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                        />
                    </svg>
                    <svg
                        @click="togglePassword"
                        v-else
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-eye-slash"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
                        />
                        <path
                            d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                        />
                        <path
                            d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
                        />
                    </svg>

                    <template v-if="loginError">
                        <p
                            class="weak"
                            v-for="(error, index) in loginError"
                            :key="index"
                        >
                            {{ error }}
                        </p>
                    </template>
                </div>

                <action-button>
                    <button-preloader v-if="userLoggedIn" />
                    <span v-else>Login</span>
                </action-button>
                <router-link class="link" to="/forgot-password"
                    >Forgot Password?</router-link
                >
            </form>
            <p>Don't have an account?</p>
            <router-link class="link" to="/signup">Sign Up</router-link>
        </div>
    </section>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ButtonPreloader from "@/components/ButtonPreloader.vue";
import { mapActions } from "vuex";

import axios from "axios";

export default {
    components: { ActionButton, ButtonPreloader },
    name: "LoginBox",
    data() {
        return {
            email: "",
            password: "",
            userLoggedIn: false,
            showPassword: false,
            loginError: "",
        };
    },
    methods: {
        ...mapActions(["set_user"]),
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        async loginUser() {
            // Send a POST request
            this.userLoggedIn = true;
            await axios({
                method: "post",
                url: "https://thegorana.herokuapp.com/users/login/",
                data: {
                    email: this.email,
                    password: this.password,
                },
            })
                .then((res) => {
                    if (res.status == 200) {
                        this.set_user(res.data);
                        this.userLoggedIn = false;
                        this.$router.push("/");
                    } else {
                        throw res;
                    }
                })
                .catch((err) => {
                    this.userLoggedIn = false;
                    this.loginError = err.response.data.non_field_errors;
                });
        },
    },
};
</script>

<style scoped>
.grid-center {
    display: grid;
    place-items: center;
}

.login {
    background-color: var(--grey-2);
    height: 100vh;
}

.login-box {
    text-align: center;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 50px 30px;
    min-width: 320px;
    margin-inline: auto;
    position: relative;
}

.login-box svg {
    font-size: 15px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
}

.login-box svg:hover {
    color: var(--dim-blue);
}

.login-box h3 {
    font-weight: 400;
}

.login-box form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-block: 30px;
}

.login-box form button {
    width: 100%;
}

.link {
    font-size: 15px;
    color: cornflowerblue;
}

.link:hover {
    color: var(--text);
}

.form-group {
    position: relative;
}

.form-group input {
    width: 100%;
}

.form-group svg {
    position: absolute;
    font-size: 17px;
    cursor: pointer;
    right: 10px;
    top: 13px;
}
</style>
