<template>
    <main-header />
    <sub-header heading="#WhoWeAre" subHeading="Get to know us" />
    <div class="container">
        <article>
            <img
                src="@/assets/images/a6.webp"
                class="about-img"
                alt="Who we are"
            />
            <div class="about-text">
                <h1>Who We Are ?</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corrupti amet iusto a esse eveniet nulla reiciendis
                    blanditiis dolor molestias. Quibusdam alias consectetur id
                    possimus ullam rerum soluta dolorem sit, veritatis, ipsam,
                    dolores maiores perspiciatis nam explicabo! Labore
                    repellendus dolore ab dicta, sapiente dignissimos quam
                    libero dolorum deleniti esse recusandae consequuntur
                    distinctio unde optio soluta, autem repudiandae! Hic id
                    eaque nihil!
                </p>
            </div>
        </article>
        <div class="video-section">
            <h1>Download Our <a href="/">App</a></h1>
            <img
                src="@/assets/images/download.svg"
                alt=""
                class="video-banner"
            />
        </div>
    </div>
    <service-section />
    <main-footer />
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import ServiceSection from "@/components/home_components/ServiceSection.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
    components: { SubHeader, ServiceSection, MainHeader, MainFooter },
    name: "AboutView",
};
</script>

<style scoped>
article {
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-bottom: 2.5rem;
}
.about-img {
    height: 50vh;
    width: 50%;
    object-fit: cover;
}

.about-text {
    width: 50%;
}

.about-text p {
    line-height: 25px;
}

.video-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 3rem;
    text-align: center;
}

.video-banner {
    height: 60vh;
    width: 60%;
    border-radius: 10px;
    margin-top: 2rem;
}

.video-section a {
    text-decoration: underline;
    color: var(--dark-blue);
}

@media (max-width: 499px) {
    article {
        flex-direction: column;
    }
    .about-img,
    .about-text,
    .video-banner {
        width: 100%;
    }

    h1 {
        font-size: 4rem;
    }
}
</style>
