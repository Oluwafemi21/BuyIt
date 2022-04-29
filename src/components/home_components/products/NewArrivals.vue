<template>
  <section class="products">
    <h1>New Arrivals</h1>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <div class="container">
      <div class="product__container">
        <product-card
          brand="addidas"
          productName="Classic White Sneakers"
          price="78.00"
          :ratings="4"
        />
        <product-card
          brand="addidas"
          productName="Classic White Sneakers"
          price="78.00"
          :ratings="5"
        />
        <product-card
          brand="addidas"
          productName="Classic White Sneakers"
          price="78.00"
          :ratings="4"
        />
        <product-card
          brand="addidas"
          productName="Classic White Sneakers"
          price="78.00"
          :ratings="5"
        />
        <product-card
          brand="addidas"
          productName="Classic White Sneakers"
          price="78.00"
          :ratings="4"
        />
        <product-card
          brand="addidas"
          productName="Classic White Sneakers"
          price="78.00"
          :ratings="5"
        />
        <product-card
          brand="addidas"
          productName="Classic White Sneakers"
          price="78.00"
          :ratings="4"
        />
        <product-card
          brand="addidas"
          productName="Classic White Sneakers"
          price="78.00"
          :ratings="5"
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
};
</script>
