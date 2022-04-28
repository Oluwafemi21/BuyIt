<template>
  <div class="service__card">
    <div class="image"></div>
    <h6>{{ name }}</h6>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    name: String,
  },
};
</script>

<style scoped>
.service__card {
  text-align: center;
  border-radius: 5px;
  border: 1px solid black;
  padding: 10px 25px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.05s ease-in;
}

.service__card:hover {
  transform: scale(1.02);
}

.service__card .image {
  height: 100px;
  background-color: black;
  width: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.service__card h6 {
  display: inline-block;
  padding: 6px 12px;
  font-weight: 600;
  color: white;
  background-color: black;
  border-radius: 5px;
}

.service__card h6:hover {
  opacity: 0.85;
}

@media (max-width: 387px) {
  .service__card {
    width: 70%;
    text-align: center;
  }

  .service__card .image {
    margin-inline: auto;
  }
}
</style>