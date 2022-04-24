<template>
  <section class="hero__section">
    <div class="container">
      <div class="hero__text">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & get up to 70% off!</p>
        <router-link to="/shop">
          <button>Shop Now</button>
        </router-link>
      </div>
    </div>
  </section>

  <section class="feature__section">
    <div class="container">
      <service-section />
      <featured-products />
    </div>
  </section>

  <banner-section />
  <new-arrivals />
  <advert-section />
</template>


<script>
import ServiceSection from "@/components/home_components/ServiceSection.vue";
import BannerSection from "@/components/home_components/BannerSection.vue";
import NewArrivals from "@/components/home_components/products/NewArrivals.vue";
import AdvertSection from "@/components/home_components/AdvertSection.vue";
import FeaturedProducts from "@/components/home_components/products/FeaturedProducts.vue";

export default {
  name: "HomeView",
  components: {
    ServiceSection,
    BannerSection,
    NewArrivals,
    AdvertSection,
    FeaturedProducts,
  },
};
</script>

<style scoped>
/* Hero Section */
.hero__section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);
  /* background-color:; */
}

.hero__text {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.hero__text h4 {
  padding-bottom: 10px;
}

.hero__text h1 {
  color: black;
}

button {
  background-color: black;
  padding: 10px 20px;
  border: 2px solid black;
  font-size: 1.7rem;
  color: var(--white);
  margin-top: 15px;
}

button:hover {
  background-color: white;
  color: black;
}

/* Services and Features */
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
    width: 100%;
  }
  to {
    width: 0;
  }
}

.product__container {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 30px;
  padding-top: 40px;
}
</style>
