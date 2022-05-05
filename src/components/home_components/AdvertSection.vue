<template>
  <section>
    <div class="container">
      <div class="ad1">
        <advert-card
          advertText="These are the best fits for the summer season"
          advertTitle="spring/summer"
          buttonText="Learn More"
          backgroundImage="first"
        />
        <advert-card
          advertText="The new warm and cozy winter collection"
          advertTitle="winter"
          buttonText="Collections"
          backgroundImage="second"
        />
      </div>
      <div class="ad2">
        <advert-card
          advertText="These are the best fits for the summer season"
          advertTitle="spring/summer"
          backgroundImage="third"
          :haveButton="false"
        />
        <advert-card
          advertText="These are the best fits for the summer season"
          advertTitle="spring/summer"
          backgroundImage="fourth"
          :haveButton="false"
        />
        <advert-card
          advertText="These are the best fits for the summer season"
          advertTitle="spring/summer"
          backgroundImage="fifth"
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
.ad1,
.ad2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ad2 {
  margin-top: 3rem;
  gap: 2rem;
}

@media (max-width: 670px) {
  .ad1,
  .ad2 {
    flex-wrap: wrap;
    gap: 2rem;
  }
}
</style>