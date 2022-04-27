<template>
  <div class="pagination">
    <a href="#page1">1</a>
    <a href="#page2">2</a>
    <a href="#page3"><i class="fal fa-long-arrow-alt-right"></i></a>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
};
</script>

<style scoped>
.pagination {
  text-align: center;
  padding: 2rem;
  margin-block: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.pagination a {
  padding: 1rem 1.8rem;
  font-size: 1.8rem;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  background-color: black;
  transition: opacity 0.25s;
}

.pagination a:hover {
  opacity: 0.85;
}
</style>