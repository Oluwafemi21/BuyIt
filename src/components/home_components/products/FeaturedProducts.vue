<template>
    <section class="products">
        <h2>Featured Products</h2>
        <p class="highlight">The best selling products we have on sale.</p>
        <div class="product__container">
            <product-card
                v-for="(product, index) in featuredProducts"
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
    </section>
</template>

<script>
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
export default {
    name: "FeaturedProducts",
    components: {
        ProductCard,
    },
    props: ["featuredProducts"],
};
</script>

<style>
.products {
    text-align: center;
}

.products h2 {
    display: inline-block;
    margin-bottom: 10px;
}

.products .highlight {
    font-size: 1.9rem;
}

.products h2::after {
    content: "";
    display: block;
    position: relative;
    margin-inline: auto;
    top: 2px;
    height: 3px;
    left: 0;
    width: 0;
    background-color: var(--text);
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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    padding-block: 4rem;
}

@media (max-width: 1200px) {
    .product__container {
        justify-content: center;
    }
}

@media (max-width: 599px) {
    .product__container {
        justify-content: center;
        grid-template-columns: minmax(250px, 300px);
    }
}
</style>
