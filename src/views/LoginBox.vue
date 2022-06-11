<template>
  <section class="login grid-center">
    <div class="login-box">
      <h3>Buy-It</h3>
      <form>
        <input type="email" required placeholder="Email" />
        <input type="password" required placeholder="Password" />
        <action-button btnvalue="Login" />
      </form>
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
  background-color: rgba(228, 220, 220, 0.767);
  height: 100vh;
}

.login-box {
  text-align: center;
  background-color: black;
  border-radius: 10px;
  padding: 25px;
  width: 350px;
  margin-inline: auto;
}

.login-box form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>