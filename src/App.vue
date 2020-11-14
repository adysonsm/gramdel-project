<template>
  <v-app dark>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-icon size="40">mdi-google</v-icon>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn v-for="item in menuItems" :key="item.to" :to="item.to" text>
        <span class="mr-2">{{ item.name }}</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <template>
      <v-footer >
        <v-card class="flex" flat tile color="transparent">
          <v-card-title >
            <strong class="subheading"
              >by code arte br</strong
            >

            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </template></v-app
  >
</template>
  </v-app>
</template>

<script>
export default {
      data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  name: "App",
  mounted() {
    console.log(this.$router.options.routes);
  },
  computed: {
    menuItems() {
      return this.$router.options.routes.map((e) => {
        return {
          name: e.name,
          to: e.path,
        };
      });
    },
  },
};
</script>

<style>
* {
  font-family: "Rubik", sans-serif;
  scroll-behavior: smooth;
}
</style>