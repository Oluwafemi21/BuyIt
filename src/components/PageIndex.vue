<template>
    <div class="pagination">
        <action-button
            aria-label="prev page"
            value="prev"
            :disabled="currentPage === 1"
            @click="handleChange"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
            </svg>
        </action-button>
        <action-button
            v-for="(page, index) in pages"
            :key="index"
            :btnvalue="`${page}`"
            :value="page"
            @click="handleChange"
        />
        <action-button btnvalue="..." disabled />
        <action-button
            :btnvalue="`${total}`"
            :value="total"
            @click="handleChange"
        />
        <action-button
            aria-label="next page"
            value="next"
            :disabled="currentPage === total"
            @click="handleChange"
        >
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
    props: {
        total: {
            type: Number,
            required: true,
        },
    },
    name: "PageIndex",
    data() {
        return {
            pages: [1, 2, 3],
            currentPage: 1,
        };
    },
    methods: {
        handleChange(event) {
            if (event.target.value === "prev") {
                this.currentPage -= 1;
                // console.log("Prev", this.currentPage);
                this.$emit("pageChange", this.currentPage);
            } else if (event.target.value === "next") {
                this.currentPage += 1;
                // console.log("Next", this.currentPage);
                this.$emit("pageChange", this.currentPage);
            } else {
                this.currentPage = parseInt(event.target.value);
                this.$emit("pageChange", this.currentPage);
            }
        },
    },
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

.pagination button[disabled] {
    color: #6c757d;
    cursor: not-allowed;
}
</style>
