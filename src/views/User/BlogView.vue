<template>
    <main-header />
    <sub-header heading="#Blog" subHeading="Read our latest blog posts" />
    <div class="container">
        <blog-posts
            v-for="(blog, index) in blogs"
            :key="index"
            :date="blog.date"
            :image_url="blog.img"
            :title="blog.title"
            :content="blog.content"
        />
    </div>
    <page-index />
    <main-footer />
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import BlogPosts from "@/components/BlogPosts.vue";
import PageIndex from "@/components/PageIndex.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
    components: { SubHeader, BlogPosts, PageIndex, MainHeader, MainFooter },
    name: "BlogView",
    data() {
        return {
            blogs: [
                {
                    date: "13/01",
                    img: require("@/assets/images/blog/b1.webp"),
                    priority: "high",
                    title: "The Cotton Jersey Zip-Up Hoodie",
                    content:
                        "Kickstarter man braid godard coloring book. Raclette waistcoast selfies yr wolf chartreuse hexagon irony, godard...",
                },
                {
                    date: "13/04",
                    img: require("@/assets/images/blog/b2.webp"),
                    title: "How to style a Quiff",
                    content:
                        "Kickstarter man braid godard coloring book. Raclette waistcoast selfies yr wolf chartreuse hexagon irony, godard...",
                },
                {
                    date: "12/01",
                    img: require("@/assets/images/blog/b3.webp"),
                    title: "Must-Have Skater Girl Items",
                    content:
                        "Kickstarter man braid godard coloring book. Raclette waistcoast selfies yr wolf chartreuse hexagon irony, godard...",
                },
                {
                    date: "16/01",
                    img: require("@/assets/images/blog/b4.webp"),
                    title: "Run-Way Inspired Trends",
                    content:
                        "Kickstarter man braid godard coloring book. Raclette waistcoast selfies yr wolf chartreuse hexagon irony, godard...",
                },
                {
                    date: "06/07",
                    img: require("@/assets/images/blog/b6.webp"),
                    title: "Mixing The Right Colors in 2022",
                    content:
                        "From the beginning of the year we have had customers ask our designers how to mix and get perfect colors ...",
                },
            ],
        };
    },
};
</script>
