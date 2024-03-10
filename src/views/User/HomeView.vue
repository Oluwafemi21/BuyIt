<template>
    <main-header />
    <banner-section />
    <about-section />
    <contact-section />
</template>

<script>
import BannerSection from "@/components/home_components/BannerSection.vue";
import ActionButton from "@/components/ActionButton.vue";
import MainHeader from "@/components/MainHeader.vue";
import ContactSection from "@/components/home_components/ContactSection.vue";
import AboutSection from "@/components/home_components/AboutSection.vue";

export default {
    name: "HomeView",
    components: {
        BannerSection,
        AboutSection,
        ContactSection,
        ActionButton,
        MainHeader,

    },
};
</script>

<style scoped>
</style>
