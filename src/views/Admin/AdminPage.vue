<template>
  <main>
    <aside :class="{ open: sideBarOpen }">
      <header>
        <h3>BUY IT</h3>
        <i v-if="sideBarOpen" @click="openSideBar" class="fas fa-times"></i>
        <i v-else @click="openSideBar" class="fas fa-bars"></i>
      </header>
      <div class="profile">
        <div class="profile-image">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
        </div>
        <div class="profile-details">
          <h4>John Smith</h4>
          <p>Administrator</p>
          <span>Online</span>
        </div>
        <i class="far fa-user icon"></i>
      </div>
      <div class="search-box">
        <form>
          <input type="text" placeholder="Search..." />
          <i class="fas fa-search" @click="openSideBar"></i>
        </form>
      </div>
      <nav>
        <h6>Menu</h6>
        <ul>
          <li>
            <router-link :to="{ name: 'overview' }">
              <i class="far fa-chart-line icon"></i>
              <span>Overview</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'products' }">
              <i class="far fa-archive icon"></i>
              <span>Products</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'orders' }">
              <i class="fas fa-shopping-cart icon"></i>
              <span>Orders</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'home' }">
              <i class="far fa-power-off icon"></i>
              <span>Logout</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
    <section class="main-content">
      <div class="container">
        <router-view> </router-view>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "AdminPage",
  data() {
    return {
      sideBarOpen: false,
    };
  },
  methods: {
    openSideBar() {
      this.sideBarOpen = !this.sideBarOpen;
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  height: 100vh;
}
aside {
  height: 100%;
  background-color: var(--dark-blue);
  width: 250px;
  color: white;
  display: flex;
  flex-direction: column;
  transition: width 0.25s linear;
}

header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

header h3 {
  font-size: 2rem;
  font-weight: 600;
}

header i {
  cursor: pointer;
  font-size: 20px;
  display: none;
}

.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-block: 1px solid var(--grey);
  padding-block: 10px;
}
.profile-image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.profile-image img {
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
}

.profile-details {
  display: flex;
  flex-direction: column;
}

.profile-details h4 {
  font-size: 1.5rem;
  font-weight: 500;
}

.profile-details span {
  font-size: 1.3rem;
}

.search-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 10px;
  border-bottom: 1px solid var(--grey);
}

.search-box form {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 100%;
  margin-inline: 20px;
  border: 2px solid var(--grey);
}

.search-box form i {
  width: 20px;
  font-size: 1.4rem;
}

.search-box input {
  border: none;
  outline: none;
  color: white;
  width: auto;
  background-color: transparent;
}

nav {
  padding: 15px 20px;
}

nav h6 {
  color: var(--grey-2);
  font-size: 1.5rem;
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

li {
  width: 100%;
}

a {
  /* padding: 8px 0 8px 5px; */
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.25s;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  font-size: 18px;
  transition: all 0.25s linear;
}

.icon {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 7px;
  border-radius: 5px;
  font-size: 13px;
}

a.router-link-exact-active i,
a:hover i {
  color: var(--dark-green);
}

.main-content {
  color: #011627;
  flex: 1;
}

@media (max-width: 799px) {
  aside {
    width: 55px;
  }
  header i {
    display: block;
  }

  header h3,
  .profile-details,
  .profile-image,
  .search-box form input,
  nav a span {
    display: none;
  }

  nav {
    padding-inline: 5px;
    text-align: center;
  }

  nav a {
    justify-content: center;
  }

  .search-box form {
    padding: 5px;
    align-items: center;
  }
  .profile {
    padding-inline: 5px;
  }

  .search-box form {
    margin-inline: 10px;
  }

  .icon {
    font-size: 20px;
    width: auto;
    padding: 8px;
  }

  aside.open {
    width: 250px;
  }
  aside.open header h3,
  aside.open .profile-details,
  aside.open .profile-image,
  aside.open .search-box form input,
  aside.open nav a span {
    display: initial;
  }

  aside.open .profile .icon {
    display: none;
  }
  aside.open .icon {
    padding: 7px;
    font-size: 13px;
  }

  aside.open nav {
    padding: initial;
  }

  aside.open nav a {
    justify-content: initial;
  }
}
</style>