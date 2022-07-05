<template>
    <article :class="backgroundImage">
        <h5>{{ advertTitle }}</h5>
        <p>{{ advertText }}</p>
        <button v-if="haveButton" :aria-label="buttonText">
            {{ buttonText }}
        </button>
    </article>
</template>

<script>
export default {
    name: "AdvertCard",
    props: {
        advertTitle: String,
        advertText: String,
        buttonText: String,
        backgroundImage: String,
        haveButton: {
            type: Boolean,
            default: true,
        },
    },
};
</script>

<style scoped>
article {
    background-size: cover;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    width: 49%;
    padding: 3rem;
    color: white;
    min-height: 40vh;
}

h5 {
    font-size: 2rem;
}

.first {
    background-image: url("@/assets/images/banner/b17.webp");
}
.second {
    background-image: url("@/assets/images/banner/b10.webp");
}
.third {
    background-image: url("@/assets/images/banner/b18.webp");
}
.fourth {
    background-image: url("@/assets/images/banner/b7.webp");
    background-position: 40%;
}
.fifth {
    background-image: url("@/assets/images/banner/b4.webp");
    background-position: 40%;
}
article p {
    padding-block: 2rem;
    color: white;
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

@media (max-width: 799px) {
    article {
        min-width: 30%;
        min-height: auto;
    }
    article {
        background-position: center center;
    }
}

@media (max-width: 670px) {
    article {
        width: 100%;
        height: 350px;
    }
}
</style>
