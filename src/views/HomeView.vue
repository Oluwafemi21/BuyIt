<template>
  <main-header />
  <section class="hero__section">
    <div class="container">
      <div class="hero__text">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & get up to 70% off!</p>
        <router-link to="/login">
          <action-button btnvalue="Start Shopping" />
        </router-link>
      </div>
    </div>
  </section>
  <service-section />
  <section class="feature__section">
    <div class="container">
      <featured-products :featuredProducts="featuredProducts" />
    </div>
  </section>

  <banner-section />
  <new-arrivals :newArrivals="newArrivals" />
  <advert-section />
  <news-letter />
  <main-footer />
</template>


<script>
import ServiceSection from "@/components/home_components/ServiceSection.vue";
import BannerSection from "@/components/home_components/BannerSection.vue";
import NewArrivals from "@/components/home_components/products/NewArrivals.vue";
import AdvertSection from "@/components/home_components/AdvertSection.vue";
import FeaturedProducts from "@/components/home_components/products/FeaturedProducts.vue";
import ActionButton from "@/components/ActionButton.vue";
import MainHeader from "@/components/MainHeader.vue";
import NewsLetter from "@/components/NewsLetter.vue";
import MainFooter from "@/components/MainFooter.vue";

import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      products: [],
    };
  },
  components: {
    ServiceSection,
    BannerSection,
    NewArrivals,
    AdvertSection,
    FeaturedProducts,
    ActionButton,
    MainHeader,
    NewsLetter,
    MainFooter,
  },
  computed: {
    featuredProducts() {
      return this.products.slice(0, 8);
    },
    newArrivals() {
      return this.products.slice(8, 16);
    },
  },
  async created() {
    let res1 = await axios.get("http://thegorana.herokuapp.com/products");
    let res2 = await axios.get(
      "http://thegorana.herokuapp.com/products/?page=2"
    );
    this.featured = res1.data.results.slice(0, 8);
    this.newProducts = res2.data.results.slice(0, 8);
    this.products = this.featured.concat(this.newProducts);
  },
};
</script>

<style scoped>
/* Hero Section */
.hero__section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 65px);
  background-image: url("@/assets/images/hero4.png");
  background-position: 60% 30%;
  background-size: cover;
}

.hero__text {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.hero__text h4 {
  padding-bottom: 1rem;
}

.hero__text h1 {
  color: var(--dim-blue);
}

.hero__text p {
  margin-bottom: 1rem;
}

/* Preloader */
.lds-spinner {
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background: var(--dark-green);
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
