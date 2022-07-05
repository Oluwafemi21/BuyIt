<template>
    <div class="product__card">
        <img
            :src="image_url"
            :alt="brand"
            class="product__image"
            loading="lazy"
        />
        <div class="product__header">
            <span class="brand">{{ brand }}</span>
            <span class="product__qty">{{
                in_stock ? "In Stock" : "Out of Stock"
            }}</span>
        </div>
        <p class="product__name">{{ productName }}</p>
        <div class="rating">
            <i v-for="rating in ratings" :key="rating" class="fas fa-star"></i>
        </div>
        <div class="price">
            <span>{{ formattedPrice }}</span>
            <router-link :to="'/cart/' + productId" aria-label="View Item">
                <button class="cart" aria-label="Add to Cart">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-cart3"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                        />
                    </svg>
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: [
        "productId",
        "image_url",
        "brand",
        "productName",
        "price",
        "currency",
        "ratings",
        "in_stock",
    ],
    computed: {
        formattedPrice() {
            return this.currency + " " + this.price.toFixed(2);
        },
    },
};
</script>

<style scoped>
.product__card {
    border: 1px solid var(--grey);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.05s ease-in;
    padding: 15px;
    text-align: left;
    border-radius: 15px;
    color: #222;
}

.product__image {
    height: auto;
    max-width: 100%;
    border-radius: 5px;
}

.product__name {
    padding-block: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.product__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
}

.brand {
    font-size: 1.5rem;
    display: inline-block;
    font-weight: 700;
}

.product__qty {
    font-size: 1.5rem;
    display: inline-block;
    padding-top: 10px;
    background-color: var(--dark-green);
    color: white;
    border-radius: 5px;
    padding: 5px;
}

.rating {
    padding-bottom: 5px;
    color: gold;
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
    cursor: pointer;
    height: 35px;
    width: 35px;
    color: var(--dark-green);
    border-radius: 50%;
    font-size: 1.9rem;
    display: grid;
    place-items: center;
    text-align: center;
    background-color: var(--light-green);
}
</style>
