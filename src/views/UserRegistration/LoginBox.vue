<template>
  <section class="login grid-center">
    <div class="login-box">
      <router-link to="/">
        <i class="fas fa-times"></i>
      </router-link>
      <h3>Buy-It</h3>
      <form @submit.prevent="loginUser">
        <input type="email" v-model="email" required placeholder="Email" />
        <input
          type="password"
          v-model="password"
          required
          placeholder="Password"
        />
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

import axios from "axios";

export default {
  components: { ActionButton, ButtonPreloader },
  name: "LoginBox",
  data() {
    return {
      email: "",
      password: "",
      userLoggedIn: false,
    };
  },
  methods: {
    async loginUser() {
      console.log("Work ode");
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
            console.log("Success!!");
            console.log(res);
            this.userLoggedIn = false;
            this.$router.push("/");
          } else {
            throw res;
          }
        })
        .catch((err) => {
          this.userLoggedIn = false;
          console.log(err);
        });
    },
  },
  mounted() {
    console.log(this.$store.state.user);
    this.$store.commit("loginUser", "Oluwafemi");
    console.log(this.$store.state.user);
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
  min-width: 300px;
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
</style>