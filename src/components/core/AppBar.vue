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
                  <v-icon left>{{ item.icon }}</v-icon>
                  <span class="caption font-weight-medium">{{
                    item.name
                  }}</span>
                </v-btn>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="pa-1" flat>
                <v-menu v-if="more.length" offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      block
                      class="align-self-center mr-4"
                      v-bind="attrs"
                      v-on="on"
                    >
                      more
                      <v-icon right>
                        mdi-menu-down
                      </v-icon>
                    </v-btn>
                  </template>

                  <!-- <v-list>
                    <v-list-item v-for="item in more" :key="item">
                      {{ item.name }}
                    </v-list-item>
                  </v-list> -->

                  <v-card
                    class="mt-1"
                    flat
                    tile
                    v-for="(item, i) in more"
                    :key="i"
                  >
                    <v-btn block>
                      <v-icon left>{{ item.icon }}</v-icon>
                      <span class="caption font-weight-medium">{{
                        item.name
                      }}</span>
                    </v-btn>
                  </v-card>
                </v-menu>
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
    more: [],
  }),
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initMenu();
    },

    initMenu() {
      console.log(this.$vuetify.breakpoint.name);
      let n = 0;
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          n = -1;
          break;
        case "sm":
          n = 2;
          break;
        case "md":
          n = 4;
          break;
        case "lg":
          n = 5;
          break;
        case "xl":
          n = 6;
          break;
      }
      if (n > 0) {
        let length = menu_data.length;
        this.menu = [...menu_data].slice(0, n);
        this.more = [...menu_data].slice(n, length);
      }
    },

    findProduct() {
      console.log(this.searchContent);
    },
  },
};
</script>
