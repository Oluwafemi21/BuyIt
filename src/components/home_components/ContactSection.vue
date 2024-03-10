<template>
    <div class="container">
        <div class="form-section">
            <form>
                <h1> Contact Us </h1>
                <span>Leave a message</span>
                <h3>We love to hear from you</h3>

                <div class="form-control">
                    <input type="text" placeholder="Your name" required />
                </div>
                <div class="form-control">
                    <input type="email" placeholder="E-mail" required />
                </div>
                <div class="form-control">
                    <input type="text" placeholder="Subject" required />
                </div>
                <div class="form-control">
                    <textarea
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <action-button btnvalue="Submit" />
            </form>
        </div>
    </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import MainHeader from "@/components/MainHeader.vue";
export default {
    components: { ActionButton, MainHeader,},
    name: "ContactSection",
   
};
</script>

<style scoped>
/* Form */
span {
    text-transform: uppercase;
    font-size: 1.5rem;
}
h1{
    text-align: center;
    margin-bottom: 2rem;
}

.form-section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 5rem;
    gap: 3rem;
}

form {
    width: 70%;
}

form h3 {
    padding-block: 2rem;
}

.form-control {
    padding-bottom: 2rem;
}
input,
textarea {
    width: 100%;
    border: 1px solid lightgrey;
}

input:hover,
textarea:hover {
    outline: none;
    border: 1px solid black;
}


@media (max-width: 799px) {
    form {
        width: 50%;
    }
}
@media (max-width: 599px) {
    form {
        width: 100%;
    }

    form h3 {
        font-size: 2.7rem;
    }

    .form-section {
        flex-direction: column;
        gap: 3rem;
    }
}
</style>
