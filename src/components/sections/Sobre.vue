<template>
  <v-container class="pb-0 pl-12 pr-12">
    <v-row dense align="end" class="main-row">
      <v-col class="pa-0">
        <v-img
          max-height="450"
          max-width="350"
          src="../../assets/woman.png"
        ></v-img>
      </v-col>
      <v-col>
        <v-list-item-subtitle class="mini-title">
          Bem vindo à
        </v-list-item-subtitle>
        <h1 class="heading-title">{{ title || "Inserir Titulo" }}</h1>
        <h3 class="pb-6 heading-subtitle">
          {{ subtitle || "Inserir subtitulo" }}
        </h3>
        <v-chip-group class="pb-4" dark>
          <v-chip outlined>Cabeleireiros</v-chip>
          <v-chip outlined>Manicures</v-chip>
          <v-chip outlined>Maquiadores</v-chip>
          <v-chip outlined>XPTO</v-chip>
        </v-chip-group>

        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    title: String,
    subtitle: String,
    image: String,
  },
};
</script>

<style>
.main-row {
  color: #fafafa;
}
.heading-title {
  font-size: 5rem;
  text-transform: uppercase;
}
.heading-subtitle {
  font-size: 1.2rem !important;
  font-weight: normal;
}
.mini-title {
  text-transform: uppercase;
  font-size: 10pt !important;
  letter-spacing: 0.3rem;
  margin-bottom: -1.5rem;
  margin-left: 0.5rem;
}
@media (max-width: 900px) {
  .main-row {
    text-align: center;
  }
  .mini-title {
    text-transform: uppercase;
    font-size: 10pt !important;
    margin: 0.5rem;
  }
  .heading-title {
    font-size: 4rem !important;
  }
  .heading-subtitle {
    font-size: 1.1rem !important;
  }
}
</style>

