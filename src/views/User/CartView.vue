<template>
  <main-header />
  <sub-header
    heading="#cart"
    subHeading="Add your coupon code and save up to 70% on all purchases!"
  />
  <section class="cart-section">
    <div class="container">
      <section>
        <div class="cart-details">
          <table>
            <thead>
              <tr>
                <td>Remove</td>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cart" :key="index">
                <td>
                  <i class="far fa-times-circle" @click="deleteItem(index)"></i>
                </td>
                <td>
                  <img :src="item.images[0]" :alt="item.brand" class="img" />
                </td>
                <td>{{ item.brand }}</td>
                <td>{{ item.price.toFixed(2) }}</td>
                <td>
                  <input
                    type="number"
                    :value="item.quantity"
                    placeholder="QTY"
                    min="1"
                    max="10"
                  />
                </td>
                <td>{{ (item.quantity * item.price).toFixed(2) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="checkout-section">
          <div class="coupon">
            <h3>Apply Coupon</h3>
            <form>
              <input type="text" placeholder="Enter coupon code" />
              <action-button btnvalue="Apply" />
            </form>
          </div>
          <div class="checkout">
            <h3>Cart Details</h3>
            <table>
              <thead>
                <tr>
                  <td>Cart Total</td>
                  <td>$335.00</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shipping Fee</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>$335.00</strong></td>
                </tr>
              </tbody>
            </table>
            <action-button btnvalue="Proceed to Checkout" />
          </div>
        </div>
      </section>
      <!-- <div class="no-cart">
        <div class="no-cart-text">
          <img src="@/assets/images/empty-cart.svg" alt="empty-cart" />
          <h3>Your cart is empty!</h3>
          <p>
            Browse our <router-link to="/shop">shop</router-link> and discover
            our latest products.
          </p>
        </div>
        <router-link to="/login">
          <action-button btnvalue="Start Shopping" />
        </router-link>
      </div> -->
    </div>
  </section>
  <main-footer />
</template>


<script>
import SubHeader from "@/components/SubHeader.vue";
import ActionButton from "@/components/ActionButton.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import { mapState } from "vuex";

export default {
  components: { SubHeader, ActionButton, MainHeader, MainFooter },
  name: "CartView",
  methods: {
    deleteItem(index) {
      this.cart = this.cart.filter((item) => item.id !== this.cart[index].id);
    },
  },
  computed: {
    ...mapState(["cart"]),
  },
};
</script>

<style scoped>
.no-cart {
  display: grid;
  place-items: center;
  gap: 30px;
}

.no-cart-text {
  text-align: center;
}

.no-cart img {
  height: 150px;
  width: 30%;
}

.cart-details {
  overflow-x: auto;
}
.img {
  height: 70px;
  width: 70px;
  margin-inline: auto;
  object-fit: contain;
}

table {
  border-collapse: collapse;
  white-space: nowrap;
  width: 100%;
}
td {
  font-size: 2rem;
}

.cart-details table thead {
  border: 1px solid lightgrey;
  border-left: none;
  border-right: none;
}

.cart-details table thead tr td {
  font-weight: 600;
  text-transform: uppercase;
  padding-block: 2rem;
  text-align: center;
}

.cart-details table tbody td {
  padding-block: 2rem;
  text-align: center;
}

.cart-details table tbody td i {
  cursor: pointer;
}

/* Checkout */
.checkout-section {
  display: flex;
  justify-content: space-between;
}

.coupon {
  width: 40%;
}

form {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

form input {
  width: 100%;
}

.checkout {
  width: 40%;
  padding: 2.5rem;
  border: 1px solid lightgrey;
}

.checkout table {
  margin-bottom: 2rem;
}

.checkout td {
  border: 1px solid lightgrey;
  padding: 0.8rem;
}

@media (max-width: 699px) {
  .cart-details table {
    table-layout: fixed;
  }
  .cart-details table thead td {
    width: 200px;
  }
  .checkout-section {
    flex-direction: column;
    gap: 3rem;
  }
  .checkout,
  .coupon {
    width: 100%;
  }
}
</style>