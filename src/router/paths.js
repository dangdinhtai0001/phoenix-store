/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */

export default [
  {
    path: "/home",
    name: "Home",
    view: "Home",
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/error",
    name: "ERROR",
    view: "Error",
    props: true,
  },
];
