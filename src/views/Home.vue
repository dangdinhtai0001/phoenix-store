<template>
  <v-container fluid>
    <!-- ------------------------------------------------------------------ -->
    <v-row class="mb-6" no-gutters dense>
      <!-- ======================= category ======================= -->
      <v-col cols="2">
        <v-card class="pa-2 overflow-y-auto" tile outlined height="75vh">
          <v-list>
            <v-list-item-group>
              <v-menu
                v-for="(item, i) in categories"
                :key="i"
                :close-on-content-click="false"
                open-on-hover
                offset-x
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item v-bind="attrs" v-on="on" color="primary">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon" small></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.name"
                        class="caption font-weight-medium"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>

                <!-- ======================= menu content ======================= -->
                <v-card
                  class="pa-2 overflow-y-auto"
                  tile
                  height="75vh"
                  width="80vw"
                >
                  <v-container fluid>
                    <v-row align="start" no-gutters class="fill-height">
                      <!-- ======================= menu ======================= -->
                      <v-col cols="8">
                        <v-card class="pa-1 overflow-y-auto" flat tile>
                          <v-card-title>
                            <v-icon class="mr-2 font-weight-medium">{{
                              item.icon
                            }}</v-icon>
                            <span class="title font-weight-medium">{{
                              item.name
                            }}</span>
                          </v-card-title>

                          <v-divider></v-divider>
                        </v-card>
                        <v-row>
                          <v-col
                            cols="4"
                            v-for="(child, i) in getChildItem(item.id)"
                            :key="i"
                          >
                            <v-card class="pa-1" flat tile>
                              <v-treeview
                                activatable
                                open-on-click
                                hoverable
                                color="primary"
                                :items="getTreviewItem(child.id, child.name)"
                              ></v-treeview>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-col>
                      <!-- ======================= menu ======================= -->
                      <!-- ======================= image ======================= -->
                      <v-col cols="4">
                        <v-card class="pa-1" flat tile>
                          <v-img :src="item.image" height="69vh"></v-img>
                        </v-card>
                      </v-col>
                      <!-- ======================= image ======================= -->
                    </v-row>
                  </v-container>
                </v-card>
                <!-- ======================= menu content ======================= -->
              </v-menu>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <!-- ======================= category ======================= -->
      <!-- ======================= Promotion 1 ======================= -->
      <v-col cols="7">
        <!-- ======================= Promotion 1 line 1 ======================= -->
        <v-card class="pa-2" tile outlined height="50vh">
          <v-carousel
            continuous
            cycle
            show-arrows
            interval="2000"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            progress
            progress-color="primary"
            height="48vh"
          >
            <v-carousel-item
              v-for="(item, i) in promotions"
              :key="i"
              :src="item.image"
            >
            </v-carousel-item>
          </v-carousel>
        </v-card>
        <!-- ======================= Promotion 1 line 1 ======================= -->
        <!-- ======================= Promotion 1 line 2 ======================= -->
        <v-row class="mb-6" no-gutters dense>
          <v-col cols="6">
            <v-card class="pa-2" tile outlined height="25vh">
              <v-img :src="promotion_slot_5.image" height="23vh"></v-img>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card class="pa-2" tile outlined height="25vh">
              <v-img :src="promotion_slot_4.image" height="23vh"></v-img>
            </v-card>
          </v-col>
        </v-row>
        <!-- ======================= Promotion 1 line 2 ======================= -->
      </v-col>
      <!-- ======================= Promotion 1 ======================= -->

      <!-- ======================= Promotion 2 ======================= -->
      <v-col cols="3">
        <v-card class="pa-2" tile outlined height="25vh">
          <v-img :src="promotion_slot_3.image" height="23vh"></v-img>
        </v-card>
        <v-card class="pa-2" tile outlined height="25vh">
          <v-img :src="promotion_slot_2.image" height="23vh"></v-img>
        </v-card>
        <v-card class="pa-2" tile outlined height="25vh">
          <v-img :src="promotion_slot_1.image" height="23vh"></v-img>
        </v-card>
      </v-col>
      <!-- ======================= Promotion 2 ======================= -->
    </v-row>
    <!-- ======================= Promotion 3 ======================= -->
    <v-row>
      <v-col cols="3">
        <v-card class="pa-1" outlined tile>
          <v-img :src="promotion_slot_6.image" height="23vh"></v-img>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="pa-1" outlined tile>
          <v-img :src="promotion_slot_7.image" height="23vh"></v-img>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="pa-1" outlined tile>
          <v-img :src="promotion_slot_8.image" height="23vh"></v-img>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="pa-1" outlined tile>
          <v-img :src="promotion_slot_9.image" height="23vh"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <!-- ======================= Promotion 3 ======================= -->
    <div v-for="(item, i) in topItems" :key="i">
      <v-banner single-line color="primary" class="mb-3" elevation="5">
        <span class="title font-weight-medium">{{ item.header }}</span>
      </v-banner>
      <v-row>
        <v-col cols="3" v-for="element in item.items" :key="element.id">
          <v-card class="pa-2" flat tile>
            <StoreItem :item="element"></StoreItem>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
// FAKE DATA
import promotions from "@/mock_api/home_get_promotion.js";
import categories from "@/mock_api/home_get_category_menu.js";
import top_items from "@/mock_api/get_top_item.js";
// FAKE DATA
export default {
  name: "Home",
  components: {
    StoreItem: () => import("@/components/store/Item"),
  },
  data: () => ({
    categoryCols: 0,
    promotionCols: 0,

    categories: [],

    topItems: [],

    promotions: [],
    promotion_slot_1: "",
    promotion_slot_2: "",
    promotion_slot_3: "",
    promotion_slot_4: "",
    promotion_slot_5: "",
    promotion_slot_6: "",
    promotion_slot_7: "",
    promotion_slot_8: "",
    promotion_slot_9: "",
  }),
  mounted() {
    this.setGridData();
    this.setPromotionData();
    this.setCategoriesData();
    this.setTopItems();
  },
  methods: {
    setGridData() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          break;
        case "sm":
          this.categoryCols = 4;
          this.promotionCols = 8;
          break;
        case "md":
          this.categoryCols = 3;
          this.promotionCols = 9;
          break;
        case "lg":
          this.categoryCols = 2;
          this.promotionCols = 10;
          break;
        case "xl":
          this.categoryCols = 2;
          this.promotionCols = 10;
          break;
      }
    },
    setPromotionData() {
      promotions.forEach((element) => {
        if (element.slot === 0) {
          this.promotions.push(element);
        }
        if (element.slot === 1) {
          this.promotion_slot_1 = { ...element };
        }
        if (element.slot === 2) {
          this.promotion_slot_2 = { ...element };
        }
        if (element.slot === 3) {
          this.promotion_slot_3 = { ...element };
        }
        if (element.slot === 4) {
          this.promotion_slot_4 = { ...element };
        }
        if (element.slot === 5) {
          this.promotion_slot_5 = { ...element };
        }
        if (element.slot === 6) {
          this.promotion_slot_6 = { ...element };
        }
        if (element.slot === 7) {
          this.promotion_slot_7 = { ...element };
        }
        if (element.slot === 8) {
          this.promotion_slot_8 = { ...element };
        }
        if (element.slot === 9) {
          this.promotion_slot_9 = { ...element };
        }
      });
    },
    setCategoriesData() {
      //this.categories = [...categories];

      categories.forEach((element) => {
        if (element.parentId === 0) {
          this.categories.push(element);
        }
      });
    },
    getChildItem(parentId) {
      let r = [];
      categories.forEach((element) => {
        if (element.parentId == parentId) {
          r.push(element);
        }
      });

      return r;
    },
    getTreviewItem(parentId, name) {
      let child = [...this.getChildItem(parentId)];
      return [
        {
          name: name,
          children: child,
        },
      ];
    },
    setTopItems() {
      this.topItems = [...top_items];
    },
  },
};
</script>
