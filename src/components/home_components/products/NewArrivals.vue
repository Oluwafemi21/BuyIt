<template>
    <section class="products">
        <h2>New Arrivals</h2>
        <p class="highlight">The latest products we have on sale</p>
        <div class="container">
            <div class="product__container">
                <product-card
                    v-for="(product, index) in newArrivals"
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
    props: ["newArrivals"],
};
</script>
