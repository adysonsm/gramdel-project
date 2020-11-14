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
    <h1>AQUI VAI O COMPONENTE DO RODAPE</h1>
  </v-app>
</template>

<script>
export default {
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