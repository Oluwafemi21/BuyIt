<template>
  <article :style="backgroundColor">
    <h4>{{ advertTitle }}</h4>
    <p>{{ advertText }}</p>
    <button v-if="haveButton">{{ buttonText }}</button>
  </article>
</template>

<script>
export default {
  name: "AdvertCard",
  props: {
    advertTitle: String,
    advertText: String,
    buttonText: String,
    color: String,
    haveButton: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    backgroundColor() {
      return `background-color: ${this.color};`;
    },
  },
};
</script>

<style scoped>
article {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: 49%;
  padding: 3rem;
  color: white;
  min-height: 40vh;
}

article p {
  padding-block: 2rem;
}

button {
  border-radius: 0px;
  border: 1px solid white;
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  color: white;
  font-weight: 600;
  background-color: transparent;
  padding: 1.3rem 2.4rem;
}

article:hover button {
  border-color: ghostwhite;
  background-color: ghostwhite;
  color: black;
  border-radius: 0px;
}
</style>