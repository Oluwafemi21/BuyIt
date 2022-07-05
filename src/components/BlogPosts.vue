<template>
    <div class="post-container">
        <h1>{{ date }}</h1>
        <img
            :src="image_url"
            :alt="title"
            class="blog-img"
            :fetchpriority="priority"
        />
        <article>
            <h4>{{ title }}</h4>
            <p>{{ content }}</p>
            <a href="#"
                >continue reading
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    /></svg
            ></a>
        </article>
    </div>
</template>

<script>
export default {
    name: "BlogPosts",
    props: ["date", "image_url", "title", "content", "priority"],
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
    min-width: 50%;
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
    color: #00bcd4;
    text-decoration: none;
    display: flex;
    align-items: center;
}

article a:hover {
    text-decoration: underline;
}

article a svg {
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
