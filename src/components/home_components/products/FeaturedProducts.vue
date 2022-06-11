<template>
  <section class="products">
    <h1>Featured Products</h1>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <div class="product__container">
      <product-card
        v-for="(product, index) in featuredProducts"
        :key="index"
        :brand="product.brand"
        :productName="product.productName"
        :price="product.price"
        :ratings="product.ratings"
      />
    </div>
  </section>
</template>

<script>
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
export default {
  name: "FeaturedProducts",
  components: {
    ProductCard,
  },
  props: ["featuredProducts"],
};
</script>

<style>
.products {
  text-align: center;
}

.products h1 {
  display: inline-block;
}

.products h1::after {
  content: "";
  display: block;
  position: relative;
  margin-inline: auto;
  top: 2px;
  height: 3px;
  left: 0;
  width: 0;
  background-color: var(--text);
  border-radius: 6px;
  animation: play 2s infinite ease-in-out;
}

@keyframes play {
  from {
    width: 0;
  }
  50% {
    width: 70%;
  }
  to {
    width: 0;
  }
}

.product__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  padding-block: 4rem;
}

@media (max-width: 1200px) {
  .product__container {
    justify-content: center;
  }
}

@media (max-width: 599px) {
  .product__container {
    justify-content: center;
  }
}
</style>