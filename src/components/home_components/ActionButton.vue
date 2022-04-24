<template>
  <button :class="type">{{ value }}</button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    value: String,
    type: String,
  },
};
</script>

<style scoped>
button,
.alt:hover {
  background-color: black;
  border-radius: 5px;
  padding: 10px 20px;
  border: 2px solid black;
  font-size: 1.7rem;
  color: var(--white);
  margin-top: 15px;
  transition: background-color 0.25s, color 0.25s;
}

button:hover,
.alt {
  background-color: white;
  color: black;
}
</style>