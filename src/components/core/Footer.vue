<template>
  <v-footer padless>
    <v-card class="flex" flat tile>
      <!-- =================================== banner =================================== -->
      <v-card-title class="primary" height="10px">
        <strong class="subheading">{{ $t("footer_banner") }}</strong>

        <v-spacer></v-spacer>

        <v-btn class="ma-0" @click="register">
          {{ $t("footer_btn_register") }}
        </v-btn>
      </v-card-title>
      <!-- =================================== banner =================================== -->
      <!-- =================================== social =================================== -->
      <v-card-text class="text-center mt-5">
        <v-btn
          v-for="(element, i) in metadata.social"
          :key="i"
          class="mx-4"
          icon
        >
          <v-icon size="24px">
            {{ element.key }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <!-- =================================== social =================================== -->

      <!-- =================================== in4 =================================== -->
      <v-card-text>
        <v-row>
          <!-- ================== name ================== -->
          <v-col cols="3">
            <v-card flat tile>
              <v-card-title>{{ metadata.name }}</v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <span>{{ metadata.description }}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <!-- ================== name ================== -->
          <!-- ================== category ================== -->
          <v-col cols="3">
            <v-card flat tile>
              <v-card-title>{{ $t("footer_lbl_categories") }}</v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-list dense>
                  <v-list-item-group color="primary">
                    <v-list-item
                      v-for="(item, i) in metadata.categories"
                      :key="i"
                      :to="item.url"
                    >
                      <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.name"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <!-- ================== category ================== -->
          <!-- ================== Menu ================== -->
          <v-col cols="3">
            <v-card flat tile>
              <v-card-title>{{ $t("footer_lbl_menu") }}</v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-list dense>
                  <v-list-item-group color="primary">
                    <v-list-item
                      v-for="(item, i) in metadata.menu"
                      :key="i"
                      :to="item.url"
                    >
                      <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.name"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <!-- ================== Menu ================== -->
          <!-- ================== Contact ================== -->
          <v-col cols="3">
            <v-card flat tile>
              <v-card-title>{{ $t("footer_lbl_contact") }}</v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <!-- ========== address ========== -->
                <v-list dense>
                  <v-list-item-group color="primary">
                    <v-subheader>{{
                      $t("footer_lbl_contact_address")
                    }}</v-subheader>
                    <v-list-item
                      v-for="(item, i) in metadata.address"
                      :key="i"
                      disabled
                    >
                      <v-list-item-icon>
                        <v-icon>mdi-office-building-marker</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <span class="subtile-1 font-weight-medium mr-2">{{
                          item.key
                        }}</span>
                        <span class="caption">{{ item.value }}</span>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
                <!-- ========== address ========== -->
                <!-- ========== phone ========== -->
                <v-list dense>
                  <v-list-item-group color="primary">
                    <v-subheader>{{
                      $t("footer_lbl_contact_phone")
                    }}</v-subheader>
                    <v-list-item
                      v-for="(item, i) in metadata.phones"
                      :key="i"
                      disabled
                    >
                      <v-list-item-icon>
                        <v-icon>mdi-dialpad</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <span class="subtile-1 font-weight-medium mr-2">{{
                          item.key
                        }}</span>
                        <span class="caption">{{ item.value }}</span>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
                <!-- ========== phone ========== -->
              </v-card-text>
            </v-card>
          </v-col>
          <!-- ================== Contact ================== -->
        </v-row>
      </v-card-text>
      <!-- =================================== in4 =================================== -->
      <v-divider></v-divider>
      <!-- =================================== copyright =================================== -->
      <v-card-text class="py-2 text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
      <!-- =================================== copyright =================================== -->
    </v-card>
  </v-footer>
</template>

<script>
// FAKE DATA
import store_metadata from "@/mock_api/get_store_metadata.js";
// FAKE DATA
export default {
  name: "CoreFooter",
  data: () => ({
    metadata: {},
    email: "",
  }),
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initMetadata();
    },
    initMetadata() {
      this.metadata = { ...store_metadata };
    },
    register() {},
  },
};
</script>
