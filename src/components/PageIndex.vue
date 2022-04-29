<template>
  <div class="pagination">
    <action-button btnvalue="1" />
    <action-button btnvalue="2" />
    <action-button>
      <i class="fal fa-long-arrow-alt-right"></i>
    </action-button>
  </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";
export default {
  components: { ActionButton },
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

.pagination button {
  font-weight: 600;
  height: 43px;
}
</style>