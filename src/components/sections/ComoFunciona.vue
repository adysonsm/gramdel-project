<template>
  <v-container>
    <h1 class="headings text-center mt-8 mb-8">Como funciona a GlamDel?</h1>
    <v-row class="text-center">
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="3"
        v-for="(card, i) in cards"
        :key="i"
      >
        <v-card height="100%" outlined class="pa-4">
          <v-icon size="50" color="primary">{{ card.icon }}</v-icon>

          <v-card-text>
            {{ card.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    cards() {
      return [
        {
          icon: "mdi-account-search",
          title: "Titulo xpto",
          text: "Você pesquisa os profissionais direto no nosso site",
        },
        {
          icon: "mdi-form-textbox",
          title: "Titulo xpto",
          text:
            "Uma vez encontrado um profissional, você preenche um formulário com seu nome e telefone",
        },
        {
          icon: "mdi-whatsapp",
          title: "Titulo xpto",
          text: "Fale diretamente com o profissional no whatsapp",
        },
        {
          icon: "mdi-google",
          title: "Titulo xpto",
          text:
            "Depois fique à vontade para contratar o que precisar com a GlamDel",
        },
      ];
    },
  },
};
</script>