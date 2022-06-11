<template>
  <main-header />
  <sub-header
    heading="#stayhome"
    subHeading="Save more with coupons up to 70% off"
  />
  <div class="container">
    <div class="product__container">
      <product-card
        v-for="(product, index) in products"
        :key="index"
        :brand="product.brand"
        :productName="product.productName"
        :price="product.price"
        :ratings="product.ratings"
      />
    </div>
  </div>
  <page-index />
  <main-footer />
</template>


<script>
import SubHeader from "@/components/SubHeader.vue";
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
import PageIndex from "@/components/PageIndex.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
  name: "ShopView",
  components: { SubHeader, ProductCard, PageIndex, MainHeader, MainFooter },
  data() {
    return {
      products: [
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 78,
          ratings: 4,
        },
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 50,
          ratings: 5,
        },
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 45,
          ratings: 4,
        },
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 56,
          ratings: 5,
        },
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 89,
          ratings: 4,
        },
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 43,
          ratings: 5,
        },
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 40,
          ratings: 4,
        },
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 53,
          ratings: 5,
        },
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 68,
          ratings: 4,
        },
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 72,
          ratings: 5,
        },
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 49,
          ratings: 4,
        },
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 65,
          ratings: 5,
        },
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 115,
          ratings: 4,
        },
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 80,
          ratings: 4,
        },
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 60,
          ratings: 4,
        },
        {
          brand: "addidas",
          productName: "Classic White Sneakers",
          price: 75,
          ratings: 4,
        },
      ],
    };
  },
};
</script>

