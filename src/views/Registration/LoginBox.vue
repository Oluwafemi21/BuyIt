<template>
  <section class="login grid-center">
    <div class="login-box">
      <router-link to="/">
        <i class="fas fa-times"></i>
      </router-link>
      <h3>Buy-It</h3>
      <form>
        <input type="email" required placeholder="Email" />
        <input type="password" required placeholder="Password" />
        <router-link to="/"> <action-button btnvalue="Login" /></router-link>
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

export default {
  components: { ActionButton },
  name: "LoginBox",
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
  padding: 50px 45px;
  min-width: 350px;
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