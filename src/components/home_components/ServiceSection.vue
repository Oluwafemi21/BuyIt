<template>
  <section class="services">
    <service-card name="Free Shipping" />
    <service-card name="Easy Order" />
    <service-card name="Smart Saving" />
    <service-card name="Promotions" />
    <service-card name="24/7 Support" />
    <service-card name="Reliable" />
    <service-card name="Free Shipping" />
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>