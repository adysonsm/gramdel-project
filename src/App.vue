<template>
  <v-app dark>
    <v-app-bar fixed :color="barColor" elevation="0" dark>
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
      <v-footer color="primary" dark>
        <v-card class="flex" flat tile color="transparent">
          <v-card-title>
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
    </template>
  </v-app>
</template>


<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  name: "App",
  data() {
    return {
      barColor: "transparent",
    };
  },
  mounted() {
    window.addEventListener("scroll", (e) => {
      const { scrollTop } = document.documentElement;
      scrollTop > 300
        ? (this.barColor = "primary")
        : (this.barColor = "transparent");
    });
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
  /* font-family: "Rubik", sans-serif; */
  scroll-behavior: smooth;
}
</style>