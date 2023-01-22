<template>
    <main-header />
    <sub-header
        heading="#stayhome"
        subHeading="Save more with coupons up to 70% off"
    />
    <div class="container">
        <div class="product__container" v-if="loaded">
            <product-card
                v-for="(product, index) in products"
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
        <product-preloader v-else> Loading products... </product-preloader>
    </div>

    <page-index @page-change="fetchNewPage" :total="total" />
    <p>Page - {{ page }}</p>
    <main-footer />
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
import ProductPreloader from "@/components/ProductPreloader.vue";
import PageIndex from "@/components/PageIndex.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

import axios from "axios";

export default {
    name: "ShopView",
    components: {
        SubHeader,
        ProductCard,
        PageIndex,
        MainHeader,
        MainFooter,
        "product-preloader": ProductPreloader,
    },
    data() {
        return {
            products: [],
            page: 1,
            loaded: false,
            total: 0,
        };
    },
    created() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            this.loaded = false;
            axios
                .get(`https://gorana.onrender.com/products?page=${this.page}`)
                .then((res) => {
                    this.products = res.data.results.map((product) => {
                        product.images[0] = product.images[0].replace(
                            "http",
                            "https"
                        );
                        return product;
                    });
                    this.total = res.data.total_pages;
                    this.loaded = true;
                })
                .catch((err) => {
                    console.log(err);
                    this.loaded = false;
                });
        },
        fetchNewPage(page) {
            this.page = page;
            this.getProducts();
        },
    },
};
</script>
