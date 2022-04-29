<template>
  <section class="services">
    <h1>Services</h1>
    <div class="service-container">
      <service-card name="Free Shipping" />
      <service-card name="Easy Order" />
      <service-card name="Smart Saving" />
      <service-card name="Promotions" />
      <service-card name="24/7 Support" />
      <service-card name="Free Shipping" />
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

.services h1 {
  margin-block: 2rem;
}

.service-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
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