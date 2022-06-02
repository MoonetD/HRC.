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
      path: "/log-in",
      component: () => import("../views/Log-in.vue")
    },
    {
      path: "/HRCProvider/SearchHistory/",
      component: () => import("../views/SearchHistory.vue")
    },
    {
      path: "/HRCProvider/GISFinder",
      component: () => import("../views/GISSearch.vue")
    },
    {
      path: "/HRCProvider",
      component: () => import("../views/ProviderHub.vue")
    },
    {
      path: "/findHRC/:name",
      component: () => import("../views/findHRC.vue")
    },
    {
      path: "/HRCDetails/:name",
      component: () => import("../views/HRCDetails.vue")
    },
    {
      path: "/HRCProvider/HRCForm",
      component: () => import("../views/HRCForm.vue")
    },
    {
      path: "/underconstruction",
      component: () => import("../views/Feed.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {

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
