<template>
  <div>
    collection
    <p>{{ type }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    type: "",
  }),
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initMetadata();
    },
    initMetadata() {
      this.type = this.$route.query.category;
      console.log(this.$route.query)
    },
  },
};
</script>
