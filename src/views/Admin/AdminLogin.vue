<template>
  <section class="login grid-center">
    <header class="login-header">
      <h3>Admin</h3>
    </header>
    <div class="login-box">
      <router-link to="/">
        <i class="fas fa-times"></i>
      </router-link>
      <h3>Buy-It</h3>
      <form>
        <input type="email" required placeholder="Email" />
        <input type="password" required placeholder="Password" />
        <router-link :to="{ name: 'overview' }">
          <action-button>
            <button-preloader v-if="loggedin" />
            <span v-else>Login</span>
          </action-button></router-link
        >
        <router-link class="link" to="/forgot-password"
          >Forgot Password?</router-link
        >
      </form>
    </div>
  </section>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ButtonPreloader from "@/components/ButtonPreloader.vue";

export default {
  components: { ActionButton, ButtonPreloader },
  name: "AdminLogin",
  data() {
    return {
      loggedin: false,
    };
  },
};
</script>

<style scoped>
.grid-center {
  display: grid;
  place-items: center;
}

.login-header {
  position: absolute;
  top: 0;
  background: var(--dim-blue);
  color: white;
  left: 0;
  right: 0;
  text-align: center;
  padding-block: 10px;
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
  margin-top: 20px;
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