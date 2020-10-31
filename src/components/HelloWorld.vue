<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-alert color="primary">col 12</v-alert>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col cols="12" sm="12" md="6" lg="3">
        <v-alert color="primary">cols="12" sm="12" md="6" lg="3"</v-alert>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="3">
        <v-alert color="primary">cols="12" sm="12" md="6" lg="3"</v-alert>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="3">
        <v-alert color="primary">cols="12" sm="12" md="6" lg="3"</v-alert>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="3">
        <v-alert color="primary">cols="12" sm="12" md="6" lg="3"</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>
