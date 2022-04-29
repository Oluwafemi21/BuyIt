<template>
  <button>
    {{ btnvalue }}
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    btnvalue: String,
  },
};
</script>

<style scoped>
button {
  border: none;
  background-color: black;
  padding: 10px 20px;
  border: 2px solid black;
  font-size: 1.7rem;
  color: white;
}

button:hover {
  background-color: white;
  color: black;
}
</style>