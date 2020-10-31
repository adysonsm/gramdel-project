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
        <span class="mr-2">{{ item.text }}</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    menuItems() {
      return [
        {
          text: "Sobre a GlamDel",
          to: "#xpto",
        },
        {
          text: "Como funciona",
          to: "#xpto2",
        },
        {
          text: "Buscar um serviço",
          to: "#xpto3",
        },
        {
          text: "Faça parte",
          to: "#sobre",
        },
      ];
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