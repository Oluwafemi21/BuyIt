<template>
  <section>
    <div class="container">
      <div class="ad1">
        <advert-card
          advertText="These are the best fits for the summer season"
          advertTitle="spring/summer"
          buttonText="Learn More"
          color="black"
        />
        <advert-card
          advertText="The new warm and cozy winter collection"
          advertTitle="winter"
          buttonText="Collections"
          color="black"
        />
      </div>
      <div class="ad2">
        <advert-card
          advertText="These are the best fits for the summer season"
          advertTitle="spring/summer"
          color="black"
          :haveButton="false"
        />
        <advert-card
          advertText="These are the best fits for the summer season"
          advertTitle="spring/summer"
          color="black"
          :haveButton="false"
        />
        <advert-card
          advertText="These are the best fits for the summer season"
          advertTitle="spring/summer"
          color="black"
          :haveButton="false"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AdvertCard from "./cards/AdvertCard.vue";

export default {
  components: { AdvertCard },
  name: "AdvertSection",
};
</script>

<style scoped>
.ad1 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.ad2 {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>