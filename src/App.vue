<template>
  <v-app dark>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/about" text>
        <span class="mr-2">Quem somos</span>
      </v-btn>
      <v-btn to="/about" text>
        <span class="mr-2">about</span>
        <v-icon>mdi-open-in-new</v-icon>
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
  data: () => ({
    menuItems: [
      {
        text: "Sobre a GlamDel",
        to: "#xpto",
      },
      {
        text: "Como funciona",
        to: "#xpto",
      },
      {
        text: "Buscar um serviço",
        to: "#xpto",
      },
      {
        text: "Faça parte",
        to: "#xpto",
      },
    ],
  }),
};
</script>

<style>
* {
  font-family: "Rubik", sans-serif;
}
</style>