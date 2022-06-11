<template>
  <section class="products">
    <h1>New Arrivals</h1>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <div class="container">
      <div class="product__container">
        <product-card
          v-for="(product, index) in newArrivals"
          :key="index"
          :brand="product.brand"
          :productName="product.productName"
          :price="product.price"
          :ratings="product.ratings"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
export default {
  name: "NewArrivals",
  components: {
    ProductCard,
  },
  props: ["newArrivals"],
};
</script>
