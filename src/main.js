import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import i18n from "@/plugins/i18n";

import "../node_modules/nprogress/nprogress.css";

Vue.config.productionTip = false;

new Vue({
  i18n,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");

import FlagIcon from "vue-flag-icon";
import router from "./router";
Vue.use(FlagIcon);
