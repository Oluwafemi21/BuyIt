<template>
  <section class="container">
    <div class="cart-item">
      <div class="image-section">
        <router-link to="/shop"
          ><i class="fal fa-long-arrow-alt-left"></i
        ></router-link>
        <div class="main-img"></div>
        <div class="img-thumbnails">
          <div class="img"></div>
          <div class="img"></div>
          <div class="img"></div>
          <div class="img"></div>
        </div>
      </div>
      <div class="product-details">
        <span>Home / T-Shirt</span>
        <h4>Men's Fashion T-Shirt</h4>
        <h4>$139</h4>
        <select name="size" id="">
          <option>Select Size</option>
          <option value="M">Medium</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="S">Small</option>
        </select>
        <div class="add-to-cart">
          <input type="number" placeholder="QTY" min="1" max="10" />
          <button>Add To Cart</button>
        </div>
        <h4>Product Details</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          eligendi, incidunt libero illum facere dicta porro explicabo
          temporibus earum labore ullam laboriosam iure voluptate, nostrum
          impedit velit doloremque, facilis ut quod minima laborum voluptas
          vitae! Nisi et molestias odit hic!
        </p>
      </div>
    </div>

    <div class="extra">
      <h1>Featured Products</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <div class="product__container">
        <product-card
          brand="addidas"
          productName="Classic White Sneakers"
          price="$78"
          :ratings="4"
        />
        <product-card
          brand="addidas"
          productName="Classic White Sneakers"
          price="$78"
          :ratings="5"
        />
        <product-card
          brand="addidas"
          productName="Classic White Sneakers"
          price="$78"
          :ratings="4"
        />
        <product-card
          brand="addidas"
          productName="Classic White Sneakers"
          price="$78"
          :ratings="5"
        />
      </div>
    </div>
  </section>
</template>


<script>
import ProductCard from "@/components/home_components/cards/ProductCard.vue";

export default {
  name: "CartItemView",
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 5rem;
}

.image-section {
  width: 40%;
}

.image-section,
.product-details {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.image-section a {
  position: absolute;
  left: -4rem;
  top: 0;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  background-color: black;
  transition: opacity 0.25s;
}

.image-section a:hover,
.add-to-cart button:hover {
  opacity: 0.85;
}

.main-img {
  height: 45vh;
  width: 100%;
  background-color: black;
}

.img-thumbnails {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  padding-top: 1rem;
  width: 100%;
}

.img-thumbnails .img {
  height: 16vh;
  max-width: 100%;
  background-color: black;
}

/* Product Details */
.product-details {
  width: 60%;
  padding-block: 2.5rem;
}

.product-details span {
  font-size: 1.4rem;
}

.product-details h4 {
  padding: 1.5rem 0 1rem 0;
}

.product-details select {
  max-width: 120px;
  padding: 2px 1rem;
  outline: none;
  border: 1px solid green;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.add-to-cart {
}

.add-to-cart input {
  margin-right: 1rem;
  font-size: 1.6rem;
  padding: 0.5rem;
  outline: none;
  border: 1px solid green;
}

.add-to-cart button {
  padding: 1rem 2rem;
  font-weight: 600;
  color: white;
  background-color: black;
}

.product-details input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.extra {
  padding-block: 2rem;
  text-align: center;
}

@media (max-width: 799px) {
  .cart-item {
    flex-direction: column;
  }
  .image-section,
  .product-details {
    width: 100%;
  }

  .image-section {
    padding-top: 2rem;
  }
  .image-section a {
    top: -2rem;
    left: 0;
  }
}
</style>
