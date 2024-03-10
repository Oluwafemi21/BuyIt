import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/store"
import HomeView from "../views/User/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/User/AboutView.vue"),
  },
  
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/User/ContactView.vue"),
  },
 

];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});

// Method 2 of setting navigation guard

// const openResources = ['home', 'login', 'signup', 'forgot-password', 'about', 'shop',
//   'blog', 'contact', 'cart', 'cartItem'];
// router.beforeEach((to, from, next) => {
//   if (openResources.includes(to.name)) {
//     next()
//   } else if (store.state.user) {
//     next()
//   } else {
//     next('/login')
//   }
// })

export default router;
