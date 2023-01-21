<template>
    <main-header />
    <sub-header
        heading="#stayhome"
        subHeading="Save more with coupons up to 70% off"
    />
    <div class="container">
        <div class="product__container" v-if="products">
            <product-card
                v-for="(product, index) in products.slice(1, 9)"
                :key="index"
                :productId="product._id"
                :productName="product.name"
                :brand="product.brand"
                :price="product.price"
                :currency="product.currency"
                :ratings="product.rating"
                :image_url="product.images[0]"
                :in_stock="product.in_stock"
            />
        </div>
        <product-preloader v-else> Loading product... </product-preloader>
    </div>

    <page-index />
    <main-footer />
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
import ProductPreloader from "@/components/ProductPreloader.vue";
import PageIndex from "@/components/PageIndex.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

import { mapState } from "vuex";

export default {
    name: "ShopView",
    components: {
        SubHeader,
        ProductCard,
        PageIndex,
        MainHeader,
        MainFooter,
        ProductPreloader,
    },
    data() {
        return {
            loading: true,
        };
    },
    computed: {
        ...mapState(["products"]),
    },
};
</script>
