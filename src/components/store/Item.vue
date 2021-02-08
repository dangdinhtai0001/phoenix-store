<template>
  <v-card class="mx-auto pt-2" rounded>
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <div class="mb-2 ml-2">
      <v-chip small>{{ item.label }}</v-chip>
    </div>

    <v-img height="20vh" contain :src="item.image"></v-img>

    <v-card-text>
      <v-chip
        v-for="(tag, i) in item.tags"
        :key="i"
        class="mt-2 ml-1 caption"
        :color="tag.color"
        small
      >
        <v-icon left small>
          {{ tag.icon }}
        </v-icon>
        {{ tag.name }}
      </v-chip>
    </v-card-text>

    <v-card-title class="caption font-weight-medium">{{
      item.title
    }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="item.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          <span class="font-weight-medium">{{ item.rating }}* </span>
          <span>({{ item.ratingCount }} votes)</span>
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        <span class="red--text font-weight-bold mr-3">{{
          item.salePrice
        }}</span>
        <span class="text-decoration-line-through">{{ item.price }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "StoreItem",
  props: ["item"],
  data: () => ({}),
};
</script>
