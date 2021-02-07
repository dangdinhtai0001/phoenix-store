<template>
  <div>
    <!----------------------- app bar ----------------------->
    <v-app-bar color="secondary" elevate-on-scroll app height="50" prominent>
      <v-img
        class="mx-2"
        src="@/assets/logo.png"
        max-height="40"
        max-width="40"
      ></v-img>

      <v-toolbar-title class="ml-2 text-uppercase title"
        >vue store</v-toolbar-title
      >

      <v-spacer></v-spacer>
      <v-text-field
        v-model="searchContent"
        :placeholder="$t('app_bar_search_palceholder')"
        filled
        rounded
        dense
        clearable
        @click:append="findProduct"
        append-icon="mdi-magnify"
      >
      </v-text-field>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-sale</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <template v-slot:extension>
        <!----------------------- Category ----------------------->
        <v-tabs fixed-tabs center-active show-arrows>
          <v-row no-gutters style="height: 150px;">
            <v-col v-for="(item, n) in menu" :key="n">
              <v-card class="pa-1" flat>
                <v-btn block>
                  <v-icon left>{{item.icon}}</v-icon>
                  <span class="caption font-weight-medium">{{item.name}}</span>
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-tabs>
        <!----------------------- Category ----------------------->
      </template>
    </v-app-bar>
    <!----------------------- app bar ----------------------->
  </div>
</template>

<script>
// fake data
import menu_data from "@/mock_api/get_appbar_menu.js";
// fake data
export default {
  name: "CoreAppBar",

  data: () => ({
    searchContent: "",
    menu: [],
  }),
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initMenu();
    },

    initMenu() {
      this.menu = [...menu_data];
      console.log(menu_data);
    },

    findProduct() {
      console.log(this.searchContent);
    },
  },
};
</script>
