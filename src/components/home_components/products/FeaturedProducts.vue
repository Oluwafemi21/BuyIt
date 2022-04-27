<template>
  <section class="products">
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
        :ratings="4"
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
  background-color: black;
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
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 30px;
  padding-block: 4rem;
}

@media (max-width: 1200px) {
  .product__container {
    grid-template-columns: repeat(2, 40%);
    margin-inline: auto;
    justify-content: center;
  }
}

@media (max-width: 599px) {
  .product__container {
    grid-template-columns: 80%;
    justify-content: center;
  }
}
</style>