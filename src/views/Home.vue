<template>
  <v-container class="grey lighten-5" fluid>
    <v-row class="mb-6" no-gutters dense>

      <v-col cols="2">
        <v-card class="pa-2" tile outlined height="75vh">
          col
        </v-card>
      </v-col>

      <v-col cols="7">
        <v-card class="pa-2" tile outlined height="50vh">
          col
        </v-card>
        <v-row class="mb-6" no-gutters dense>
          <v-col cols="6">
            <v-card class="pa-2" tile outlined height="25vh">
              col
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card class="pa-2" tile outlined height="25vh">
              col
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="3">
        <v-card class="pa-2" tile outlined height="25vh">
          col
        </v-card>
        <v-card class="pa-2" tile outlined height="25vh">
          col
        </v-card>
        <v-card class="pa-2" tile outlined height="25vh">
          col
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// FAKE DATA
import promotions from "@/mock_api/home_get_promotion.js";
// FAKE DATA
export default {
  name: "Home",
  data: () => ({
    categoryCols: 0,
    promotionCols: 0,

    promotions: [],
    promotion_slot_1: "",
    promotion_slot_2: "",
    promotion_slot_3: "",
    promotion_slot_4: "",
    promotion_slot_5: "",
  }),
  components: {},
  mounted() {
    this.setGridData();
    this.setPromotionData();
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
      });
    },
  },
};
</script>
