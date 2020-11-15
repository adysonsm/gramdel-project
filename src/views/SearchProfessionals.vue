<template>
  <v-container>
    <Sobre />
    <h1 class="headings text-center mt-8 mb-8">Categorias</h1>
    <v-text-field
      outlined
      prepend-inner-icon="mdi-magnify"
      placeholder="O quê você procura?"
      v-model="filterTerm"
    ></v-text-field>
    <v-row class="text-center">
      <v-col
        v-for="(professional, i) in filteredProfessionals"
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
      <v-col v-if="filteredProfessionals.length === 0">
        <v-alert>
          <v-icon>mdi-emoticon-sad-outline</v-icon>
          {{ `Nenhum resultado encontrado para "${filterTerm}" ` }}
        </v-alert>
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
      filterTerm: "",
      professionals,
    };
  },
  computed: {
    filteredProfessionals() {
      if (this.filterTerm) {
        let exp = new RegExp(this.filterTerm.trim(), "i");
        return this.professionals.filter(
          (professional) =>
            exp.test(professional.name) ||
            exp.test(professional.description) ||
            exp.test(professional.tags.map((e) => e))
        );
      } else {
        return this.professionals;
      }
    },
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