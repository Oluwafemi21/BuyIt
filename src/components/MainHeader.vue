<template>
  <header>
    <div class="container">
      <nav class="top__navigation">
        <router-link to="/">
          <h3 class="logo">Buy-It</h3>
        </router-link>

        <div class="nav__links">
          <router-link to="/">Home</router-link>
          <router-link to="/shop">Shop</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/cart">
            <i class="fal fa-shopping-bag"></i>
          </router-link>
        </div>
        <div class="mobile-menu">
          <router-link to="/cart">
            <i class="fal fa-shopping-bag"></i>
          </router-link>
          <i class="fas fa-bars"></i>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: white;
  box-shadow: 0 1px 10px 3px rgba(0, 0, 0, 0.03);
  padding-block: 10px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
}

.top__navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: var(--blue);
  font-weight: 700;
  letter-spacing: 2px;
}

.nav__links a {
  display: block;
  padding-inline: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  transition: all 0.25s ease-in-out;
  line-height: 2rem;
  width: 100%;
}

a.active__page,
.nav__links a:hover {
  color: black;
}

.nav__links {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav__links a::after {
  content: "";
  display: block;
  position: relative;
  top: 2px;
  height: 2px;
  left: 0;
  width: 0;
  background-color: black;
  border-radius: 6px;
  transition: width 0.25s ease;
}

.nav__links a:hover::after {
  width: 70%;
}

.nav__links a.router-link-exact-active::after {
  width: 70%;
}

.mobile-menu {
  display: none;
}

@media (max-width: 799px) {
  .mobile-menu {
    display: flex;
    font-size: 1.6rem;
  }
  .mobile-menu i {
    padding-inline: 10px;
    cursor: pointer;
  }
  .nav__links {
    display: none;
  }
}
</style>
