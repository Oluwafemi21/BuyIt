<template>
  <sub-header heading="#Blog" subHeading="Read our latest blog posts" />
  <div class="container">
    <blog-posts
      date="13/01"
      title="The Cotton Jersey Zip-Up Hoodie"
      content="Kickstarter man braid godard coloring book. Raclette waistcoast selfies yr wolf chartreuse hexagon irony, godard..."
    />
    <blog-posts
      date="13/04"
      title="How to style a Quiff"
      content="Kickstarter man braid godard coloring book. Raclette waistcoast selfies yr wolf chartreuse hexagon irony, godard..."
    />
    <blog-posts
      date="12/01"
      title="Must-Have Skater Girl Items"
      content="Kickstarter man braid godard coloring book. Raclette waistcoast selfies yr wolf chartreuse hexagon irony, godard..."
    />
    <blog-posts
      date="16/01"
      title="Run-Way Inspired Trends"
      content="Kickstarter man braid godard coloring book. Raclette waistcoast selfies yr wolf chartreuse hexagon irony, godard..."
    />
    <blog-posts
      date="10/03"
      title="AW20 Menswear Trends"
      content="Kickstarter man braid godard coloring book. Raclette waistcoast selfies yr wolf chartreuse hexagon irony, godard..."
    />
  </div>
  <page-index />
</template>


<script>
import SubHeader from "@/components/SubHeader.vue";
import BlogPosts from "@/components/BlogPosts.vue";
import PageIndex from "@/components/PageIndex.vue";
export default {
  components: { SubHeader, BlogPosts, PageIndex },
  name: "BlogView",
};
</script>

