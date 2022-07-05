<template>
    <main-header />
    <section class="hero__section">
        <div class="container">
            <div class="hero__text">
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>On all products</h1>
                <p>Save more with coupons & get up to 70% off!</p>
                <router-link to="/shop">
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
        let res1 = await axios.get("https://thegorana.herokuapp.com/products");
        let res2 = await axios.get(
            "https://thegorana.herokuapp.com/products/?page=2"
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
    background-image: url("@/assets/images/hero4.webp");
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
</style>
