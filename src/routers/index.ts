// src/router.ts
import { createWebHistory, createRouter } from "vue-router";

// Layout
import PublicLayout from '../layouts/public.vue'

//Page
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import PostList from '../views/PostList.vue'
import Reservation from '../views/Reservation.vue'


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta : {layout: PublicLayout}
  },
  {
    path: "/tire",
    name: "Tire",
    component: Product,
    meta : {layout: PublicLayout}
  },
  {
    path: "/wheel",
    name: "Wheel",
    component: Product,
    meta : {layout: PublicLayout}
  },
  {
    path: "/notification",
    name: "Post",
    component: PostList,
    meta : {layout: PublicLayout}
  },
  {
    path: "/qna",
    name: "Post",
    component: PostList,
    meta : {layout: PublicLayout}
  },
  {
    path: "/reservation",
    name: "Post",
    component: Reservation,
    meta : {layout: PublicLayout}
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;