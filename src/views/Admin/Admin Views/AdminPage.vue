<template>
  <main>
    <aside :class="{ open: sideBarOpen }">
      <div class="sidebar-header">
        <h3>BUY IT</h3>
        <i v-if="sideBarOpen" @click="openSideBar" class="fas fa-times"></i>
      </div>
      <ul>
        <li>
          <router-link :to="{ name: 'overview' }">
            <i class="fas fa-home"></i>
            <span>Overview</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'products' }">
            <i class="far fa-archive"></i>
            <span>Products</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'finance' }">
            <i class="far fa-chart-line"></i>
            <span>Finance Metrics</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'orders' }">
            <i class="fas fa-shopping-cart"></i>
            <span>Orders</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'home' }">
            <i class="far fa-power-off"></i>
            <span>Logout</span>
          </router-link>
        </li>
      </ul>
    </aside>
    <section class="main-content">
      <nav>
        <div class="sidebar-toggle">
          <i class="fas fa-bars" @click="openSideBar"></i>
        </div>
        <div class="nav-profile">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt="John Smith"
          />
          <span class="name">&#128075; Hi, John!</span>
          <i
            class="fas fa-chevron-down"
            @click="showDropDown = !showDropDown"
          ></i>
          <div class="dropdown" v-if="showDropDown">
            <div class="dropdown-profile">
              <span>Signed in as</span>
              <span class="dropdown-name">John Smith</span>
            </div>
            <router-link to="/">
              <i class="fas fa-user-edit"></i>
              <span>Edit Profile</span>
            </router-link>
            <router-link :to="{ name: 'home' }">
              <i class="fas fa-external-link"></i>
              <span>Go to Shop</span>
            </router-link>
            <router-link :to="{ name: 'adminLogin' }">
              <i class="fas fa-power-off"></i>
              <span>Logout</span>
            </router-link>
          </div>
        </div>
      </nav>
      <div class="container">
        <router-view></router-view>
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
      showDropDown: false,
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
nav {
  background-color: whitesmoke;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  margin-bottom: 10px;
  position: sticky;
  top: 0;
}

.nav-profile {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
}

.nav-profile img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.nav-profile .name {
  font-size: 1.8rem;
}

.nav-profile i {
  font-size: 1.5rem;
  cursor: pointer;
}

.dropdown {
  background-color: white;
  z-index: 2;
  border-radius: 8px;
  border: 1px solid var(--grey-2);
  position: absolute;
  top: 35px;
  right: 0;
  transition: 0.25s;
  width: 170px;
}

.dropdown-profile {
  padding: 10px;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid var(--grey-2);
}

.dropdown a {
  font-size: 1.6rem;
  color: #222;
}

.dropdown a:hover {
  color: var(--dark-green);
}

.dropdown-name {
  font-weight: 500;
}

.sidebar-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2.2rem;
}

main {
  display: flex;
  height: 100vh;
}
aside {
  height: 100%;
  background-color: var(--dark-blue);
  width: 220px;
  color: white;
  display: flex;
  flex-direction: column;
  transition: 0.25s;
  z-index: 2;
}

.sidebar-header {
  width: 100%;
  border-bottom: 1px solid white;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar-header h3 {
  font-size: 2.2rem;
  font-weight: 600;
}

.sidebar-header i {
  cursor: pointer;
  font-size: 2rem;
  display: none;
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
  padding: 10px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.25s;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  transition: color 0.2s, background-color 0.2s;
}

.icon {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 7px;
  border-radius: 5px;
  font-size: 13px;
}

ul a.router-link-exact-active,
ul a:hover {
  border-left: 4px solid var(--dark-green);
  background-color: rgba(255, 255, 255, 0.1);
}

ul a.router-link-exact-active i,
ul a:hover i {
  color: var(--dark-green);
}

.main-content {
  color: #011627;
  flex: 1;
  padding-top: 0px;
}

@media (max-width: 799px) {
  aside {
    position: fixed;
    left: -220px;
  }
  .open {
    left: 0;
  }
  .sidebar-header i {
    display: initial;
  }
}
</style>