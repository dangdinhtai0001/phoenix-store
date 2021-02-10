/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */

export default [
  // ====================== store ======================
  {
    path: "/home",
    name: "Home",
    view: "Home",
  },
  {
    path: "/collection",
    name: "Collection",
    view: "Collection",
    query: true
  },
  // ====================== redirect ======================
  {
    path: "/",
    redirect: "/home",
  },
  // ====================== default ======================
  {
    path: "/error",
    name: "ERROR",
    view: "Error",
    props: true,
  },
];
