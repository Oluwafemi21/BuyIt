<template>
  <main-header />
  <section class="container">
    <router-link to="/shop" id="back"
      ><i class="fal fa-long-arrow-alt-left"></i
    ></router-link>
    <div class="cart-item" v-if="loaded">
      <div class="image-section">
        <img :src="activeImage" class="main-img" />
        <div class="img-thumbnails">
          <img
            v-for="(image, index) in product.images.slice(0, 4)"
            :key="index"
            :src="image"
            class="thumbnail"
            @click="setActiveImage(index)"
          />
        </div>
      </div>
      <div class="product-details">
        <span>Home / {{ product.brand }}</span>
        <h4>{{ product.name }}</h4>
        <h4>{{ formattedPrice }}</h4>
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
          {{ product.description }}
        </p>
      </div>
    </div>

    <!-- <div class="extra" v-if="loaded">
      <h1>Featured Products</h1>
      <p class="highlight">The best selling products we have on sale.</p>
      <div class="product__container">
         <product-card
          v-for="(product, index) in featuredProducts"
          :key="index"
          :productId="product._id"
          :productName="product.name"
          :brand="product.brand"
          :price="product.price"
          :currency="product.currency"
          :ratings="product.rating"
          :image_url="product.images[0]"
          :in_stock="product.in_stock"
        />
      </div>
    </div> -->

    <div class="preloader" v-else>
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Loading Product...</p>
    </div>
  </section>
</template>


<script>
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
import ActionButton from "@/components/ActionButton.vue";
import MainHeader from "@/components/MainHeader.vue";

import axios from "axios";

export default {
  name: "CartItemView",
  components: {
    ProductCard,
    ActionButton,
    MainHeader,
  },
  data() {
    return {
      activeImage: "",
      product: [],
      loaded: false,
    };
  },
  methods: {
    setActiveImage(image) {
      this.activeImage = this.product.images[image];
    },
  },
  computed: {
    formattedPrice() {
      return this.product.currency + " " + this.product.price.toFixed(2);
    },
  },
  async created() {
    let res = await axios.get(
      `https://thegorana.herokuapp.com/products/${this.$route.params.id}`
    );
    this.product = res.data;
    this.loaded = true;
    this.activeImage = this.product.images[0];
  },
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

#back {
  padding: 0.5rem 1.5rem;
  font-size: 2rem;
  text-align: center;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  background-color: var(--dark-blue);
  transition: opacity 0.25s;
}

#back:hover {
  opacity: 0.85;
}

.main-img {
  height: 55vh;
  max-width: 100%;
  object-fit: contain;
}

.img-thumbnails {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  padding-top: 1rem;
  width: 100%;
}

.img-thumbnails .thumbnail {
  height: auto;
  max-width: 100%;
  cursor: pointer;
}

.img-thumbnails .thumbnail:hover {
  opacity: 0.7;
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
