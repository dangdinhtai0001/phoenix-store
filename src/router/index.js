import Vue from "vue";
import VueRouter from "vue-router";

// Routes
import paths from "../router/paths";

function route(path, view, name, redirect) {
  if (redirect) {
    return {
      path: path,
      redirect: redirect,
    };
  } else {
    return {
      name: name || view,
      path,
      component: (resolve) => import(`@/views/${view}.vue`).then(resolve),
    };
  }
}

// Create a new router
const router = new VueRouter({
  mode: "history",
  routes: paths
    .map((path) => route(path.path, path.view, path.name, path.redirect))
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

export default router;
Vue.use(VueRouter);
