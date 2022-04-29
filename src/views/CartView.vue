<template>
  <sub-header
    heading="#cart"
    subHeading="Add your coupon code and save up to 70% on all purchases!"
  />
  <section class="cart-section">
    <div class="container">
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
            <tr>
              <td><i class="far fa-times-circle"></i></td>
              <td><div class="img"></div></td>
              <td>Classic White Sneakers</td>
              <td>$78.00</td>
              <td>
                <input
                  type="number"
                  value="1"
                  placeholder="QTY"
                  min="1"
                  max="10"
                />
              </td>
              <td>$78.00</td>
            </tr>
            <tr>
              <td><i class="far fa-times-circle"></i></td>
              <td><div class="img"></div></td>
              <td>Classic White Sneakers</td>
              <td>$78.00</td>
              <td>
                <input
                  type="number"
                  value="1"
                  placeholder="QTY"
                  min="1"
                  max="10"
                />
              </td>
              <td>$78.00</td>
            </tr>
            <tr>
              <td><i class="far fa-times-circle"></i></td>
              <td><div class="img"></div></td>
              <td>Classic White Sneakers</td>
              <td>$78.00</td>
              <td>
                <input
                  type="number"
                  value="1"
                  placeholder="QTY"
                  min="1"
                  max="10"
                />
              </td>
              <td>$78.00</td>
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
    </div>
  </section>
</template>


<script>
import SubHeader from "@/components/SubHeader.vue";
import ActionButton from "@/components/ActionButton.vue";
export default {
  components: { SubHeader, ActionButton },
  name: "CartView",
};
</script>

<style scoped>
.cart-details {
  overflow-x: auto;
}
.img {
  height: 70px;
  width: 70px;
  margin-inline: auto;
  background-color: black;
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