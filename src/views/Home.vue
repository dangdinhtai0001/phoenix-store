<template>
  <v-container>
    <v-row>
      <!----------------------- category ----------------------->
      <v-col :cols="categoryCols">
        1
      </v-col>
      <!----------------------- category ----------------------->
      <!----------------------- promotion ----------------------->
      <v-col :cols="promotionCols">
        2
      </v-col>
      <!----------------------- promotion ----------------------->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    categoryCols: 0,
    promotionCols: 0,
  }),
  components: {},
  mounted() {
    this.setGridData();
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
  },
};
</script>
