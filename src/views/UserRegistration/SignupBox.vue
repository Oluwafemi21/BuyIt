<template>
    <section class="signup grid-center">
        <div class="signup-box">
            <router-link to="/">
                <i class="fas fa-times"></i>
            </router-link>
            <h4>Create Account</h4>
            <form @submit.prevent="registerUser">
                <div class="form-line">
                    <div class="form-item">
                        <input type="text" required v-model="firstName" />
                        <label>First Name</label>
                    </div>
                    <div class="form-item">
                        <input type="text" required v-model="lastName" />
                        <label>Last Name</label>
                    </div>
                </div>
                <div class="form-line">
                    <div class="form-item">
                        <input type="email" required v-model="emailAddress" />
                        <label>Email Address</label>
                    </div>
                    <div class="form-item">
                        <input
                            :type="showPassword ? 'text' : 'password'"
                            required
                            minlength="4"
                            @keyup="validatePassword"
                            v-model="password"
                        />

                        <label>Password</label>
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
                        <span
                            v-show="validator"
                            class="strength-validation"
                            :class="validator ? errorMessage : ''"
                            >Password strength is {{ errorMessage }}</span
                        >
                    </div>
                </div>
                <div class="form-line">
                    <div class="form-item">
                        <input
                            :type="confirmPassword ? 'text' : 'password'"
                            minlength="4"
                            required
                            v-model="password2"
                            @keyup="validatePassword2"
                        />
                        <label>Confirm Password</label>
                        <i
                            v-if="confirmPassword"
                            class="fas fa-eye"
                            @click="toggleConfirmPassword"
                        ></i>
                        <i
                            v-else
                            class="fas fa-eye-slash"
                            @click="toggleConfirmPassword"
                        ></i>
                        <span
                            class="strength-validation"
                            :class="validator2 ? 'strong' : 'weak'"
                        >
                            {{ confirmPasswordValidator }}
                        </span>
                    </div>
                    <div class="form-item">
                        <input type="tel" required v-model="phoneNumber" />
                        <label>Phone number</label>
                    </div>
                </div>
                <div class="checkbox">
                    <input
                        type="checkbox"
                        id="checkbox1"
                        required
                        v-model="terms"
                    />
                    <label class="check-text" for="checkbox1">
                        I accept the
                        <router-link to="/">Terms & Conditions</router-link> and
                        Privacy and Cookie Notice.
                    </label>
                </div>
                <div class="checkbox">
                    <input type="checkbox" id="checkbox2" />
                    <label for="checkbox2" class="check-text">
                        I want to receive Buy-it Newsletters with the best deals
                        and offers
                    </label>
                </div>
                <div class="action-buttons">
                    <div v-if="email_error">
                        <p
                            class="weak"
                            v-for="(error, index) in email_error"
                            :key="index"
                        >
                            {{ error }}
                        </p>
                    </div>
                    <action-button>
                        <button-preloader v-if="userCreated" />
                        <span v-else>CREATE ACCOUNT</span>
                    </action-button>
                    <!-- <div class="or">
                        <hr />
                        <span>OR</span>
                        <hr />
                    </div> -->
                    <!-- <router-link to="/"
                        ><action-button
                            class="gmail-btn"
                            btnvalue="REGISTER WITH GMAIL"
                            ><img
                                src="@/assets/images/google-icon.png"
                                class="gmail-icon" /></action-button
                    ></router-link> -->
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
import ButtonPreloader from "@/components/ButtonPreloader.vue";
import axios from "axios";

export default {
    components: { ActionButton, ButtonPreloader },
    name: "SignUpBox",
    data() {
        return {
            firstName: "",
            lastName: "",
            emailAddress: "",
            password: "",
            password2: "",
            phoneNumber: "",
            terms: "",
            showPassword: false,
            confirmPassword: false,
            passwordValidator: false,
            confirmPasswordValidator: "",
            errorMessage: "",
            validator: false,
            validator2: false,
            userCreated: false,
            email_error: "",
        };
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        toggleConfirmPassword() {
            this.confirmPassword = !this.confirmPassword;
        },
        validatePassword() {
            if (this.password.length === 0) {
                this.validator = false;
            } else {
                this.validator = true;
                if (this.password.length >= 8) {
                    this.errorMessage = "strong";
                } else if (
                    this.password.length >= 4 &&
                    this.password.length < 8
                ) {
                    this.errorMessage = "medium";
                } else if (this.password.length < 4) {
                    this.errorMessage = "weak";
                }
            }
        },
        validatePassword2() {
            if (this.password2.length != 0) {
                if (this.password2 === this.password) {
                    this.confirmPasswordValidator = "Passwords match";
                    this.validator2 = true;
                } else {
                    this.confirmPasswordValidator = "Passwords do not match";
                    this.validator2 = false;
                }
            } else {
                this.confirmPasswordValidator = "";
                this.validator2 = false;
            }
        },
        async registerUser() {
            // Send a POST request
            this.userCreated = true;
            await axios({
                method: "post",
                url: "https://thegorana.herokuapp.com/users/register/",
                data: {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    email: this.emailAddress,
                    password: this.password,
                    password2: this.password2,
                    phone: this.phoneNumber,
                },
            })
                .then((res) => {
                    if (res.status == 200) {
                        console.log("Success!!");
                        this.userCreated = false;
                        this.$router.push("/login");
                    } else {
                        throw res;
                    }
                })
                .catch((err) => {
                    this.userCreated = false;
                    this.email_error = err.response.data.email;
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

.signup {
    background-color: var(--grey-2);
    min-height: 100vh;
    padding-inline: 20px;
}

.signup-box {
    background: whitesmoke;
    padding: 30px;
    border-radius: 10px;
    width: 60%;
    margin-inline: auto;
    position: relative;
}

.signup-box .fa-times {
    font-size: 15px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
}

.signup-box .fa-times:hover {
    color: var(--dim-blue);
}

.signup-box h4 {
    color: var(--brown);
}

form .form-line {
    display: flex;
    margin: 40px 0;
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
    font-size: 18px;
    display: block;
    background: transparent;
    width: 100%;
    height: 100%;
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.103);
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

.form-item input:focus + label,
.form-item input:valid + label {
    transform: translateY(-25px);
    color: var(--brown);
    font-size: 15px;
    transition: all 0.4s ease;
}

.form-item input:valid + label {
    color: initial;
}

.action-buttons {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;
}

.action-buttons .or {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    place-content: center;
    align-items: center;
    margin: 20px 0;
    font-size: 14px;
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
    background-color: transparent;
}

.form-footer {
    text-align: center;
}

.form-footer p {
    margin-bottom: 10px;
}

.form-footer a {
    font-size: 16px;
    font-weight: 500;
}

.form-footer a:hover {
    background-color: #4e453736;
    padding: 10px 7px 6px;
    border-radius: 3px;
}

.checkbox {
    display: flex;
    gap: 15px;
    margin-block: 25px;
}

.check-text a {
    color: var(--brown);
}

.checkbox input[type="checkbox"] {
    height: 16px;
    cursor: pointer;
}

.check-text {
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
}

/* Password Validation */
.strength-validation {
    display: block;
    margin-top: 6px;
    font-size: 13px;
}
/* Responsiveness */

@media (max-width: 768px) {
    .signup-box {
        width: 100%;
    }
}
@media (max-width: 580px) {
    form .form-line {
        flex-direction: column;
        gap: 30px;
    }
    .form-item input:focus + label,
    .form-item input:valid + label {
        transform: translateY(-20px);
    }

    .strength-validation {
        text-align: right;
    }
}
</style>
