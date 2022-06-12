<template>
  <section class="signup grid-center">
    <div class="signup-box">
      <h3>Create Account</h3>
      <form action="#">
        <div class="form-line">
          <div class="form-item">
            <input type="text" required />
            <label>First Name</label>
          </div>
          <div class="form-item">
            <input type="text" required />
            <label>Last Name</label>
          </div>
        </div>
        <div class="form-line">
          <div class="form-item">
            <input type="email" required />
            <label>Email Address</label>
          </div>
          <div class="form-item">
            <input type="password" required />

            <label>Password</label>
            <i
              v-if="showPassword"
              class="fas fa-eye"
              @click="togglePassword"
            ></i>
            <i v-else class="fas fa-eye-slash" @click="togglePassword"></i>
          </div>
        </div>
        <div class="form-item">
          <input type="tel" required />
          <label>Phone number(optional)</label>
        </div>
        <div class="checkbox">
          <input type="checkbox" />
          <label class="check-text">
            I accept the
            <router-link to="/">Terms & Conditions</router-link><br />
            and Privacy and Cookie Notice.
          </label>
        </div>
        <div class="checkbox">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" class="check-text">
            I want to receive Buy-it Newsletters with the best deals and offers
          </label>
        </div>
        <div class="action-buttons">
          <action-button btnvalue="CREATE ACCOUNT" />
          <p><hr><span>OR</span><hr></p>
          <router-link to="/"
            ><action-button class="gmail-btn" btnvalue="REGISTER WITH GMAIL"
              ><img
                src="@/assets/images/google-icon.png"
                class="gmail-icon" /></action-button
          ></router-link>
        </div>
        <div class="form-footer">
            <p>Already have an account?</p>
            <router-link to="/login">LOGIN</router-link>
        </div>
      </form>
    
    </div>
  </section>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
export default {
  components: { ActionButton },
  name: "SignUpBox",
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
.form-footer {
  text-align: center;
}

.form-footer a {
  font-size: 16px;
  font-weight: 500;
}

.form-footer a:hover {
  background-color: #4e453783;
  padding: 10px 7px 6px;
  border-radius: 3px;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
}

.action-buttons p {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  place-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  text-align: center;
}

.action-buttons button {
  width: 100%;
  position: relative;
}

.gmail-icon {
  position: absolute;
  left: 20px;
  height: 15px;
  width: 15px;
}

.gmail-btn {
  background: rgba(180, 170, 170, 0.493);
  color: var(--text);

  border-color: rgba(180, 170, 170, 0.493);
}

.gmail-btn:hover {
  border-color: #4285f4;
  background-color: white;
}

.checkbox {
  display: flex;
  gap: 15px;
  margin-block: 25px;
}

.check-text a {
  color: var(--brown);
}

input[type="checkbox"] {
  height: 16px;
  width: 16px;
  cursor: pointer;
}

.check-text {
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
}

.grid-center {
  display: grid;
  place-items: center;
}

.signup {
  background-color: var(--grey-2);
  height: 100vh;
}

.signup-box {
  background: whitesmoke;
  padding: 30px;
  border-radius: 10px;
  min-width: 800px;
  margin-inline: auto;
}

.signup-box h3 {
  color: var(--brown);
}

form .form-line {
  display: flex;
  margin: 30px 0;
  gap: 20px;
}

.form-item {
  position: relative;
  height: 35px;
  width: 100%;
}

.form-item input {
  border-radius: 0px;
  resize: none;
  padding: 15px 0 10px;
  display: block;
  background: transparent;
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.103);
}

.form-item input[type="tel"] {
  width: 50%;
}

.form-item label {
  position: absolute;
  pointer-events: none;
  font-size: 17px;
  bottom: 10px;
}

.form-item i {
  position: absolute;
  right: 0;
  font-size: 17px;
  cursor: pointer;
  bottom: 10px;
}

.form-item input:focus {
  outline: none;
  border-bottom: 2px solid var(--brown);
  transform-origin: center;
  transition: all 0.4s ease-in-out;
}

.form-item input:focus + label {
  transform: translateY(-25px);
  color: var(--brown);
  font-size: 15px;
  transition: all 0.4s ease;
}
.form-item input:valid + label {
  color: initial;
}
</style>