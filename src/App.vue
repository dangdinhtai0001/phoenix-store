<template>
  <v-app>
    <!-- v-navigation-drawer -->
    <!-- v-navigation-drawer -->

    <!-- appbar -->
    <!-- appbar -->

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <v-fade-transition mode="out-in">
          <!-- <router-view :key="$route.fullPath"></router-view> -->
        </v-fade-transition>
      </v-container>
    </v-main>

    <!-- footer -->
    <!-- footer -->
  </v-app>
</template>

<script>
export default {
  name: "AppIndex",

  components: {
    CoreSettings: () => import("./components/core/Settings"),
  },
  data: () => ({
    //
  }),
};
</script>
