<template>
    <section class="services">
        <h2>Services</h2>
        <div class="service-container">
            <service-card name="Free Shipping">
                <img src="@/assets/images/shipping.svg" alt="Free shipping"
            /></service-card>

            <service-card name="Easy Order">
                <img src="@/assets/images/order.svg" alt="Easy Order" />
            </service-card>
            <service-card name="Smart Saving">
                <img src="@/assets/images/savings.svg" alt="Smart Saving" />
            </service-card>
            <service-card name="Promotions">
                <img src="@/assets/images/promos.svg" alt="Promotions" />
            </service-card>
            <service-card name="24/7 Support">
                <img src="@/assets/images/support.svg" alt="24/7 Support"
            /></service-card>
            <service-card name="Home Delivery">
                <img src="@/assets/images/delivery.svg" alt="Home Delivery" />
            </service-card>
        </div>
    </section>
</template>

<script>
import ServiceCard from "@/components/home_components/cards/ServiceCard.vue";
export default {
    name: "ServiceSection",
    components: {
        "service-card": ServiceCard,
    },
};
</script>

<style scoped>
.services {
    text-align: center;
}

.services h2 {
    margin-bottom: 2rem;
}

.service-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}

img {
    height: 100px;
    width: 100px;
}

@media (max-width: 399px) {
    .service-container {
        padding: 2rem;
        flex-wrap: nowrap;
        overflow-x: auto;
        justify-content: initial;
    }
}
</style>
