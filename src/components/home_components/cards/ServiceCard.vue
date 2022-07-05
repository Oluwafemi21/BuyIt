<template>
    <div class="service__card">
        <slot></slot>
        <span>{{ name }}</span>
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
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 5px;
    border: 1px solid var(--grey);
    padding: 10px 25px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.05s ease-in;
}

.service__card:hover {
    transform: scale(1.02);
}

.service__card span {
    font-size: 12px;
    display: inline-block;
    padding: 8px 12px;
    font-weight: 600;
    color: white;
    background-color: black;
    border-radius: 5px;
}

.service__card:nth-child(1) span {
    background-color: #3f3d56;
}
.service__card:nth-child(2) span {
    background-color: #226e72;
}
.service__card:nth-child(3) span {
    background-color: #008765;
}
.service__card:nth-child(4) span {
    background-color: #883e5f;
}
.service__card:nth-child(5) span {
    background-color: #b310e8;
}

.service__card:nth-child(6) span {
    background-color: #2c0000;
}

.service__card span:hover {
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
