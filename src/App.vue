<template>
  <main-header />
  <router-view />
  <news-letter />
  <main-footer />
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader.vue";
import NewsLetter from "@/components/NewsLetter.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "HomeView",
  components: {
    MainHeader,
    NewsLetter,
    MainFooter,
  },
};
</script>

<style>
/* Default Styles */
@import url("https://fonts.googleapis.com/css?family=League+Spartan:100,200,300,regular,500,600,700,800,900");

:root {
  /* Primary Colors */
  --text: #222;
  --blue: #202c59;
  --brown: #581f18;
  --dark-green: #348c41;
  --light-green: #2ba84a;
  --green: #04f06a;
  --white: #fcfffc;
  --red: #f24333;
  --bg: #f0eff4;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "League Spartan", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  color: black;
  width: 100%;
}

section {
  width: 100%;
  padding-block: 30px;
}

.container {
  width: 85%;
  margin-inline: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.25s, color 0.25s;
  border: none;
}

h1 {
  font-size: 5rem;
  line-height: 6rem;
}

h2 {
  font-size: 4.6rem;
  line-height: 5.4rem;
}

h3 {
  font-size: 3.2rem;
  line-height: 4.4rem;
}

h4 {
  font-size: 2rem;
}

h6 {
  font-size: 1.2rem;
  font-weight: 700;
}

p {
  font-size: 1.7rem;
  color: #9f9f92;
  font-weight: 400;
  padding-block: 1rem;
}

ul {
  list-style-type: none;
}
</style>