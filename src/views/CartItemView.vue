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
          <input type="number" value="1" placeholder="QTY" min="1" max="10" />
          <action-button btnvalue="Add To Cart" />
        </div>
        <h4>Product Details</h4>
        <p class="product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          porro, quis veniam necessitatibus a sed vitae illo omnis culpa
          similique? Laudantium natus doloremque, aperiam labore, iste minima ad
          alias nisi saepe pariatur odit laboriosam ab fugiat ea, officia eaque
          magni. Nulla facere quod iste blanditiis explicabo veniam. Facilis,
          dolore maiores. Cumque, minima aperiam. Obcaecati minima sit libero,
          molestias eos ab!
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
import ActionButton from "@/components/ActionButton.vue";

export default {
  name: "CartItemView",
  components: {
    ProductCard,
    ActionButton,
  },
  methods: {},
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 5rem;
  padding-bottom: 2rem;
}

.image-section {
  width: 47%;
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

.image-section a:hover {
  opacity: 0.85;
}

.main-img {
  height: 55vh;
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
  height: 20vh;
  max-width: 100%;
  background-color: black;
  cursor: pointer;
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
  padding: 0.8rem 1rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.extra {
  padding-block: 4.5rem;
  text-align: center;
}

.product-description {
  line-height: 2.5rem;
}

@media (max-width: 599px) {
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
