<template>
    <section class="forgot grid-center">
        <div class="forgot-box">
            <router-link to="/">
                <i class="fas fa-times"></i>
            </router-link>
            <h3>Buy-It</h3>
            <form>
                <input type="email" required placeholder="Email" />

                <action-button btnvalue="Recover Password" />
                <router-link class="link" to="/login">Login</router-link>
            </form>
        </div>
    </section>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
export default {
    components: { ActionButton },
    name: "ForgotPassword",
};
</script>

<style>
.grid-center {
    display: grid;
    place-items: center;
}

.forgot {
    background-color: var(--grey-2);
    height: 100vh;
}

.forgot-box {
    text-align: center;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 30px 30px;
    min-width: 320px;
    margin-inline: auto;
    position: relative;
}

.forgot-box i {
    font-size: 15px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
}

.forgot-box i:hover {
    color: var(--dim-blue);
}

.forgot-box h3 {
    font-weight: 400;
}

.forgot-box form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}

.link {
    font-size: 15px;
    color: cornflowerblue;
}

.link:hover {
    color: var(--text);
}
</style>
