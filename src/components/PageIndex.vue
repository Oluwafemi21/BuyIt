<template>
    <div class="pagination">
        <action-button btnvalue="1" />
        <action-button btnvalue="2" />
        <action-button aria-label="next page">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
            </svg>
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
