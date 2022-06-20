import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/User/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/UserRegistration/LoginBox.vue"),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import("../views/UserRegistration/SignupBox.vue"),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import("../views/UserRegistration/ForgotPassword.vue"),
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
    path: "/shop",
    name: "shop",
    component: () => import("../views/User/ShopView.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/User/BlogView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/User/ContactView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/User/CartView.vue"),
  },
  {
    path: '/cart/:id',
    name: 'cartItem',
    component: () => import("../views/User/CartItemView.vue"),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import("../views/Admin/AdminPage.vue"),
    children: [
      {
        path: '/admin/overview',
        name: 'overview',
        component: () => import("../views/Admin/OverviewPage.vue"),
      }, {
        path: '/admin/products',
        name: 'products',
        component: () => import("../views/Admin/ProductsPage.vue"),
      }, {
        path: '/admin/orders',
        name: 'orders',
        component: () => import("../views/Admin/OrdersPage.vue"),
      },
    ]
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


export default router;
