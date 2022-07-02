<template>
    <main-header />
    <sub-header
        heading="Checkout"
        subHeading="Complete your order by filling the form below"
    />
    <section>
        <div class="container">
            <div class="coupon">
                <input type="text" placeholder="Enter your coupon code" />
                <action-button>Apply</action-button>
            </div>
            <form class="billing-info" @submit.prevent="placeOrder">
                <div class="form">
                    <h4>Billing Address</h4>
                    <div class="form-group">
                        <div class="form-control">
                            <label>First Name *</label>
                            <input type="text" required />
                        </div>
                        <div class="form-control">
                            <label>Last Name *</label>
                            <input type="text" required />
                        </div>
                    </div>
                    <div class="form-control">
                        <label>Country *</label>
                        <input type="text" required />
                    </div>
                    <div class="form-control">
                        <label>Street Address*</label>
                        <input
                            type="text"
                            placeholder="House number and Street number"
                            required
                            v-model="userAddress"
                        />
                    </div>
                    <div class="form-group">
                        <div class="form-control">
                            <label>Town / City *</label>
                            <input type="text" required />
                        </div>
                        <div class="form-control">
                            <label>State / County *</label>
                            <input type="text" required v-model="userState" />
                        </div>
                    </div>
                    <div class="form-control">
                        <label>Email Address *</label>
                        <input type="email" required />
                    </div>
                    <div class="form-control">
                        <label>Order notes (optional) </label>
                        <textarea
                            rows="10"
                            placeholder="Notes about your order, e.g. special notes for delivery"
                        ></textarea>
                    </div>
                </div>
                <aside>
                    <h4>Your Order</h4>
                    <table class="table table-summary">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Total (NGN)</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(item, index) in cart" :key="index">
                                <td>
                                    <span>{{ item.name }}</span> <br />
                                    Size: {{ item.size }} <br />
                                    Qty: {{ item.quantity }}
                                </td>
                                <td>
                                    {{ item.price.toFixed(2) }}
                                </td>
                            </tr>

                            <tr class="summary-subtotal">
                                <td>Subtotal (NGN):</td>
                                <td>{{ subtotal.toFixed(2) }}</td>
                            </tr>
                            <!-- End .summary-subtotal -->
                            <tr>
                                <td>Shipping:</td>
                                <td>Free shipping</td>
                            </tr>
                            <tr class="summary-total">
                                <td>Total (NGN):</td>
                                <td>
                                    {{ subtotal.toFixed(2) }}
                                </td>
                            </tr>
                            <!-- End .summary-total -->
                        </tbody>
                    </table>
                    <button class="submit" :class="{ payment: !noOrder }">
                        <template v-if="noOrder">
                            <span>Place Order</span>
                            <div class="icon">
                                <i class="fa fa-credit-card"></i>
                            </div>
                        </template>
                        <button-preloader v-else />
                    </button>
                </aside>
            </form>
        </div>
    </section>
    <success-modal
        @close-modal="closeModal"
        :price="price"
        :email="this.user.email"
        :reference="referenceMessage"
        v-if="showModal"
    />
    <main-footer />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import ButtonPreloader from "@/components/ButtonPreloader.vue";
import SubHeader from "@/components/SubHeader.vue";
import ActionButton from "@/components/ActionButton.vue";
import SuccessModal from "@/components/SuccessModal.vue";

import { mapState, mapGetters } from "vuex";
import axios from "axios";

export default {
    data() {
        return {
            noOrder: true,
            userState: "",
            userAddress: "",
            referenceMessage: "",
            price: "",
            showModal: false,
            email: "",
        };
    },
    components: {
        MainHeader,
        MainFooter,
        ButtonPreloader,
        SubHeader,
        ActionButton,
        SuccessModal,
    },
    computed: {
        ...mapState(["user", "cart"]),
        ...mapGetters(["subtotal"]),
    },
    methods: {
        async placeOrder() {
            this.noOrder = false;
            await axios
                .post(
                    "https://thegorana.herokuapp.com/orders/",
                    {
                        orders: this.cart.map((item) => {
                            return {
                                product_id: item._id,
                                quantity: item.quantity,
                                size: item.size,
                            };
                        }),
                        state: this.userState,
                        address: this.userAddress,
                    },
                    {
                        headers: {
                            Authorization: `${this.user.token}`,
                        },
                    }
                )
                .then((response) => {
                    this.referenceMessage = response.data.transaction_reference;
                    this.price = response.data.price;
                    this.noOrder = true;
                    this.showModal = true;
                })
                .catch((error) => {
                    this.noOrder = true;
                    console.log(error);
                });
        },
        closeModal() {
            this.showModal = false;
        },
    },
};
</script>

<style scoped>
.coupon {
    display: flex;
    gap: 15px;
}

.billing-info {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-top: 15px;
}

.billing-info h4 {
    margin-bottom: 15px;
}

.form {
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

form input,
form textarea {
    border-radius: 0px;
    padding: 0px;
}

.form-group {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
.form-control {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

label {
    font-size: 1.5rem;
}

.form-control input,
.form-control textarea {
    padding: 10px 12px;
    outline: none;
    transition: 0.25s;
    background-color: whitesmoke;
    width: 100%;
}

textarea {
    resize: vertical;
}

.form-control input:focus,
.form-control textarea:focus {
    border: 1px solid var(--dim-blue);
    background-color: white;
}

aside {
    flex: 1;
    padding: 25px;
    border: 1px dashed lightgray;
    background-color: whitesmoke;
    height: auto;
}

aside h4 {
    padding-bottom: 20px;
    border-bottom: 1px solid black;
}

table {
    border-collapse: collapse;
    width: 100%;
}

.table.table-summary thead th,
.table.table-summary .summary-subtotal td {
    color: var(--brown);
    font-weight: 500;
    font-size: 1.6rem;
}

.table.table-summary thead th:last-child,
.table.table-summary tbody td:last-child {
    text-align: right;
    min-width: 90px;
}
table thead tr th {
    text-align: left;
    font-size: 1.6rem;
    font-weight: 400;
}

table tbody tr td {
    font-size: 1.6rem;
    font-weight: 400;
}

.table.table-summary tbody td {
    padding: 0;
    height: 70px;
    border-bottom: 0.1rem solid #ebebeb;
}

.table.table-summary .summary-total td {
    font-weight: 400;
    font-size: 1.6rem;
    color: var(--dim-blue);
    border-bottom: none;
}

table tbody tr td span {
    width: 150px;
    white-space: nowrap;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 10px;
}

.submit {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    font-size: 1.6rem;
    width: 100%;
    color: var(--dim-blue);
    background-color: transparent;
    border-radius: 0px;
    border: 1px solid var(--dim-blue);
}

.icon {
    position: absolute;
    right: 20px;
}

.submit:hover,
.submit:focus,
.submit:active,
.payment {
    background-color: var(--dim-blue);
    color: white;
}

.submit:nth-child(2) {
    display: none;
}

.submit:hover:nth-child(1),
.submit:focus:nth-child(1) {
    display: none;
}

@media (max-width: 790px) {
    .billing-info,
    .form-group {
        flex-direction: column;
        width: 100%;
    }
    aside,
    .form {
        width: 100%;
    }
    table tbody tr td span {
        width: 100%;
        white-space: break-spaces;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
