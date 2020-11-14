<template>
  <v-container>
    <Sobre />
    <h1 class="headings text-center mt-8 mb-8">Categorias</h1>
    <v-row class="text-center">
      <v-col
        v-for="(professional, i) in professionals"
        :key="i"
        cols="12"
        sm="12"
        md="6"
        lg="4"
      >
        <ProfessionalCard
          :image="professional.image"
          :name="professional.name"
          :rating="professional.rating"
          :ratingSize="professional.ratingSize"
          :description="professional.description"
          :whatsapp="professional.whatsapp"
          :availabilityTime="professional.availabilityTime"
          :tags="professional.tags"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Sobre from "../components/sections/Sobre";
import ProfessionalCard from "../components/ProfessionalCard";
import professionals from "../data/professionals";

export default {
  components: {
    Sobre,
    ProfessionalCard,
  },
  data() {
    return {
      professionals,
    };
  },
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