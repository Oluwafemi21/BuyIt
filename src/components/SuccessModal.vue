<template>
    <Transition name="fade" appear>
        <div
            v-if="showModal"
            class="modal-overlay"
            @click="$emit('close-modal')"
        ></div>
    </Transition>
    <Transition name="slide" appear>
        <div v-if="showModal" class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <h3>Success</h3>
                    <button class="close" @click="$emit('close-modal')">
                        <i class="fa fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <p>
                        Your order: #{{ reference }} has been placed
                        successfully.
                    </p>
                </div>
                <div class="modal-footer">
                    <paystack
                        buttonClass="paystack-button"
                        buttonText="Pay Online"
                        :publicKey="key"
                        :email="email"
                        :amount="amount"
                        :reference="reference"
                        :onSuccess="onSuccessfulPayment"
                        :onCanel="onCancelledPayment"
                    >
                        Pay N{{ price }}
                    </paystack>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import paystack from "vue3-paystack";
import ActionButton from "@/components/ActionButton.vue";
import { mapActions } from "vuex";
export default {
    props: ["reference", "price", "email"],
    components: {
        ActionButton,
        paystack,
    },
    data() {
        return {
            key: "pk_test_ec28501e234f6e2d802dc2a156c2511abd2d0527", // Replace with your public key
            amount: this.price * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
            ref: this.reference, // Replace with a reference you generated
            showModal: false,
        };
    },
    methods: {
        ...mapActions(["clear_cart"]),
        onSuccessfulPayment: function (response) {
            this.clear_cart();
            this.$router.push("/");
        },
        onCancelledPayment: function () {
            this.$router.push("/checkout");
        },
    },
    emits: ["close-modal"],
    mounted() {
        this.showModal = true;
    },
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}
.modal-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 300px;
    max-width: 500px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
    z-index: 9999;
}

.modal-header h3 {
    text-align: center;
}

.modal-body {
    padding-block: 30px;
}
.modal-footer {
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-footer button {
    width: 100%;
}
.modal-footer button span {
    width: 100%;
}
.modal-footer button .icon {
    position: absolute;
    right: 20px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(-50%) translateX(100vw);
}

.close {
    background-color: transparent;
    font-size: 1.6rem;
    position: absolute;
    top: 20px;
    right: 20px;
}

.paystack-button {
    border: none;
    background-color: var(--dim-blue);
    padding: 10px 20px;
    border: 2px solid var(--dim-blue);
    font-size: 1.7rem;
    color: white;
}

.paystack-button:hover {
    background-color: #083e46;
    border-color: #083e46;
}
</style>
