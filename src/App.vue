<template>
  <v-app>
    <!-- v-navigation-drawer -->
    <!-- v-navigation-drawer -->

    <!-- appbar -->
    <CoreAppBar></CoreAppBar>
    <!-- appbar -->

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <v-fade-transition mode="out-in">
          <router-view
            :key="$route.fullPath"
            class="grey lighten-4"
          ></router-view>
        </v-fade-transition>
      </v-container>

      <v-btn color="primary" fab fixed bottom right @click="up2Top">
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-main>

    <!-- footer -->
    <CoreFooter></CoreFooter>
    <!-- footer -->
  </v-app>
</template>

<script>
export default {
  name: "AppIndex",
  components: {
    //CoreSettings: () => import("./components/core/Settings"),
    CoreAppBar: () => import("./components/core/AppBar"),
    CoreFooter: () => import("./components/core/Footer"),
  },
  data: () => ({
    //
  }),

  methods: {
    up2Top() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
