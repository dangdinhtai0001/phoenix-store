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
          <!-- <router-view :key="$route.fullPath"></router-view> -->
          <v-sheet
            id="scrolling-techniques-6"
            class="overflow-y-auto"
            max-height="600"
          >
            <v-container style="height: 1000px;"></v-container>
          </v-sheet>
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
    //CoreSettings: () => import("./components/core/Settings"),
    CoreAppBar: () => import("./components/core/AppBar"),
  },
  data: () => ({
    //
  }),
};
</script>
