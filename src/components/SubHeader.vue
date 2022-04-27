<template>
  <div class="sub-heading">
    <h2>{{ heading }}</h2>
    <p>{{ subHeading }}</p>
  </div>
</template>

<script>
export default {
  name: "SubHeader",
  props: {
    heading: String,
    subHeading: String,
  },
};
</script>

<style scoped>
.sub-heading {
  background-color: black;
  color: white;
  height: 30vh;
  display: grid;
  place-content: center;
  text-align: center;
  margin-bottom: 2.5rem;
}
</style>