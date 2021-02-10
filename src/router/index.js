import Vue from "vue";
import VueRouter from "vue-router";

// Routes
import paths from "../router/paths";

// Nprocess
import NProgress from "nprogress";

function route(path, view, name, redirect, query) {
  if (redirect) {
    return {
      path: path,
      redirect: redirect,
    };
  } else {
    return {
      name: name || view,
      path,
      query: query,
      component: (resolve) => import(`@/views/${view}.vue`).then(resolve),
    };
  }
}

// Create a new router
const router = new VueRouter({
  mode: "history",
  routes: paths
    .map((path) => route(path.path, path.view, path.name, path.redirect, path.query))
    .concat([
      { path: "*", redirect: { name: "ERROR", query: { code: "404" } } },
    ]),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

//BEFORE ROUTE
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    next();
  } else {
    next();
  }
});

//AFTER ROUTE
router.afterEach(() => {
  NProgress.done();
});

export default router;
Vue.use(VueRouter);
