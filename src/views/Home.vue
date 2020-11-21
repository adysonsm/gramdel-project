<template>
  <div class="home">
    <Sobre
      class="main-container"
      title="GlamDel"
      subtitle="Aqui você encontra os melhores profissionais!"
    >
      <v-text-field
        filled
        dark
        color="white"
        prepend-inner-icon="mdi-magnify"
        placeholder="O quê você procura?"
        v-model="filterTerm"
      ></v-text-field>
    </Sobre>

    <v-container>
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
    <ComoFunciona />

    <FacaParte />
  </div>
</template>

<script>
// @ is an alias to /src
import Sobre from "@/components/sections/Sobre.vue";
import ComoFunciona from "@/components/sections/ComoFunciona.vue";
import FacaParte from "@/components/sections/FacaParte.vue";
import BuscarServico from "@/components/sections/BuscarServico.vue";
import ProfessionalCard from "../components/ProfessionalCard";
import professionals from "../data/professionals";

export default {
  name: "Home",
  components: {
    Sobre,
    ComoFunciona,
    ProfessionalCard,
    FacaParte,
    BuscarServico,
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

<style >
.main-container {
  background-image: linear-gradient(
    to right top,
    #ed2121,
    #e80046,
    #d90263,
    #c3227a,
    #a7368a
  );
  margin: 0 0 !important;
  max-width: 100%;
}
</style>