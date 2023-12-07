import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue")
    },
    {
      path: "/",
      name: "index_base",
      component: () => import("../views/web/web.vue"),
      children: [
        {
          path: "",
          name: "index",
          component: () => import("../views/web/index.vue"),
        },
        {
          path: "img_roy",
          name: "img_roy",
          component: () => import("../views/web/img_roy.vue"),
        },
      ]
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/admin/admin.vue"),
      children: [
        {
          path: "",
          name: "admin_index",
          redirect: "/admin/home" //重定向
        },
        {
          path: "home",
          name: "home",
          component: () => import("../views/admin/home/home.vue")
        },
        {
          path: "user_list",
          name: "user_list",
          component: () => import("../views/admin/user_mgr/user_list.vue")
        },
        {
          path: "system_list",
          name: "system_list",
          component: () => import("../views/admin/system_mgr/system_list.vue")
        },
        {
          path: "image_list",
          name: "image_list",
          component: () => import("../views/admin/image_mgr/image_list.vue")
        },
        {
          path: "article_list",
          name: "article_list",
          component: () => import("../views/admin/article_mar/article_list.vue")
        },
        {
          path: "article_create",
          name: "article_create",
          component: () => import("../views/admin/article_mar/article_create.vue")
        },
      ]
    }
  ]
})

export default router
