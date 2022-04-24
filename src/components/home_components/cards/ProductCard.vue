<template>
  <div class="product__card">
    <div class="product__image"></div>
    <span class="brand">{{ brand }}</span>
    <p class="product__name">{{ productName }}</p>
    <div class="rating">
      <i v-for="rating in ratings" :key="rating" class="fas fa-star"></i>
    </div>
    <div class="price">
      <span>{{ price }}</span>
      <div class="cart">
        <i class="fal fa-shopping-cart"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    image_url: String,
    brand: String,
    productName: String,
    price: String,
    ratings: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.product__card {
  border: 1px solid black;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.05s ease-in;
  padding: 15px;
  text-align: left;
  cursor: pointer;
  border-radius: 15px;
}

.product__image {
  height: 200px;
  width: auto;
  border-radius: 5px;
  background-color: black;
}

.product__name {
  padding-block: 5px;
}

.brand {
  font-size: 1.5rem;
  display: block;
  padding-top: 10px;
}

.rating {
  padding-bottom: 5px;
}

.rating i {
  font-size: 1.5rem;
}

.price {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price span {
  font-size: 1.6rem;
  font-weight: 700;
}

.cart {
  height: 35px;
  line-height: 35px;
  width: 35px;
  background-color: black;
  border-radius: 50%;
  font-size: 1.5rem;
  text-align: center;
  color: white;
}

.cart:hover {
  opacity: 0.85;
}
</style>