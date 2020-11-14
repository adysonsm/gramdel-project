<template>
  <v-container>
    <v-row align="center" class="text-center">
      <v-col>
        <h1>{{ title || "Inserir Titulo" }}</h1>
        <h3>{{ subtitle || "Inserir subtitulo" }}</h3>
        <v-btn class="mt-4" color="primary">{{
          ctaText || "Inserir CtaText"
        }}</v-btn>
      </v-col>
      <v-col>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="350"
          max-width="550"
          :src="image || 'https://picsum.photos/id/11/500/300'"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    title: String,
    subtitle: String,
    ctaText: String,
    image: String,
  },
};
</script>