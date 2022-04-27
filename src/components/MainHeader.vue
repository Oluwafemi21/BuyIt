<template>
  <header>
    <div class="container">
      <nav class="top__navigation">
        <router-link to="/">
          <h3 class="logo">Buy-It</h3>
        </router-link>

        <div class="nav__links" :class="{ activeNav: showSideNav }">
          <i class="far fa-times close-btn" @click="hideNav()"></i>
          <router-link @click="hideNav()" to="/">Home</router-link>
          <router-link @click="hideNav()" to="/shop">Shop</router-link>
          <router-link @click="hideNav()" to="/blog">Blog</router-link>
          <router-link @click="hideNav()" to="/about">About</router-link>
          <router-link @click="hideNav()" to="/contact">Contact</router-link>
          <router-link @click="hideNav()" to="/cart" class="desktop-cart">
            <i class="fal fa-shopping-bag"></i>
          </router-link>
        </div>
        <div class="mobile-menu">
          <router-link to="/cart">
            <i class="fal fa-shopping-bag"></i>
          </router-link>
          <i class="fas fa-bars" @click="showNav()"></i>
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
  data() {
    return {
      showSideNav: false,
    };
  },
  methods: {
    showNav() {
      this.showSideNav = true;
    },
    hideNav() {
      this.showSideNav = false;
    },
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
  z-index: 3;
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
  padding-inline: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  transition: all 0.25s ease-in-out;
  line-height: 2rem;
}

a.active__page,
.nav__links a:hover,
.mobile-menu a:hover {
  color: black;
}

.nav__links {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav__links a::after,
.mobile-menu a::after {
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

.nav__links a:hover::after,
.mobile-menu a:hover::after {
  width: 70%;
}

.nav__links a.router-link-exact-active::after {
  width: 70%;
}

.desktop-cart {
  display: initial;
}

.mobile-menu {
  display: none;
}

.close-btn {
  display: none;
  font-size: 2.5rem;
  cursor: pointer;
}

/* Media Query */

@media (max-width: 799px) {
  .mobile-menu {
    display: flex;
    align-items: center;
    font-size: 1.9rem;
    gap: 1.5rem;
  }

  .mobile-menu i {
    cursor: pointer;
    color: black;
  }

  .nav__links {
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2.2rem;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -55%;
    width: 55%;
    padding: 2rem 3rem;
    background-color: white;
    height: 100%;
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
    transition: 0.25s;
  }

  .activeNav {
    right: 0;
  }

  .nav__links a {
    padding: 0.5rem 0;
    font-size: 1.8rem;
    width: 100%;
  }

  .nav__links a:hover::after {
    width: 2.5rem;
  }

  .nav__links a.router-link-exact-active::after {
    width: 2.5rem;
  }

  .close-btn {
    display: initial;
  }

  .desktop-cart {
    display: none;
  }
}
</style>
