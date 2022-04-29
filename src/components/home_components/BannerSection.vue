<template>
  <section class="banner">
    <div class="container">
      <h4>Discount Sales</h4>
      <h2>Get up to 70% Off on All t-shirts and accessories!</h2>
      <router-link to="/shop">
        <button>Explore Now</button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerSection",
};
</script>

<style scoped>
.banner {
  text-align: center;
  min-height: 25vh;
  background-color: black;
  color: white;
  display: grid;
  place-items: center;
  padding-block: 40px;
}

h2 {
  padding-block: 1.4rem;
}

.banner button {
  padding: 14px 30px;
  letter-spacing: 0.5px;
  background-color: white;
  border: 2px solid black;
  font-size: 1.8rem;
  color: black;
}

@media (max-width: 599px) {
  h2 {
    font-size: 2.8rem;
  }
}
</style>