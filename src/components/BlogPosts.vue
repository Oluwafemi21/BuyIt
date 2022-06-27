<template>
  <div class="post-container">
    <h1>{{ date }}</h1>
    <img :src="image_url" :alt="title" class="blog-img" />
    <article>
      <h4>{{ title }}</h4>
      <p>{{ content }}</p>
      <a href="#">continue reading <i class="fal fa-long-arrow-right"></i></a>
    </article>
  </div>
</template>

<script>
export default {
  name: "BlogPosts",
  props: ["date", "image_url", "title", "content"],
};
</script>

<style scoped>
.post-container {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  gap: 5rem;
  padding-block: 4.5rem;
}

.post-container h1 {
  position: absolute;
  z-index: 2;
  color: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0.8rem;
  font-size: 6.5rem;
}

.blog-img {
  width: 50%;
  height: 45vh;
  z-index: 2;
  object-fit: cover;
  object-position: center;
}

article h4 {
  font-weight: 600;
  font-size: 2.4rem;
}

article p {
  max-width: 500px;
  margin-bottom: 1.5rem;
}
article a {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
}

article a i {
  margin-left: 1rem;
  font-weight: 900;
}

@media (max-width: 643px) {
  .post-container {
    flex-direction: column;
  }
  .blog-img {
    width: 100%;
  }
}
</style>