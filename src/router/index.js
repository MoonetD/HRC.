import {
  createRouter,
  createWebHistory
} from "vue-router";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";
const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: "/",
      component: () => import("../views/Home.vue")
    },
    {
      path: "/register",
      component: () => import("../views/Register.vue")
    },
    {
      path: "/sign-in",
      component: () => import("../views/SignIn.vue")
    },
    {
      path: "/feed",
      component: () => import("../views/Feed.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log("lol?");
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log("checking?");
    if (getAuth().currentUser) {
      next();
      console.log("redirecting");
    } else {
      alert("you dont have access!");
      next('/');
    }
  } else {
    next();
  }
});
export default router;
