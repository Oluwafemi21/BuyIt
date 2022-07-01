<template>
    <section class="login grid-center">
        <div class="login-box">
            <router-link to="/">
                <i class="fas fa-times"></i>
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
                    <i
                        v-if="showPassword"
                        class="fas fa-eye"
                        @click="togglePassword"
                    ></i>
                    <i
                        v-else
                        class="fas fa-eye-slash"
                        @click="togglePassword"
                    ></i>
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

.login-box i {
    font-size: 15px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
}

.login-box i:hover {
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

.form-group i {
    position: absolute;
    font-size: 17px;
    cursor: pointer;
    right: 10px;
    top: 13px;
}
</style>
