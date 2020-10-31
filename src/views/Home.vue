<template>
  <div class="home">
    <Sobre />
    <ComoFunciona />
    <BuscarServico />
    <FacaParte />
  </div>
</template>

<script>
// @ is an alias to /src
import Sobre from "@/components/sections/Sobre.vue";
import ComoFunciona from "@/components/sections/ComoFunciona.vue";
import FacaParte from "@/components/sections/FacaParte.vue";
import BuscarServico from "@/components/sections/BuscarServico.vue";

export default {
  name: "Home",
  components: {
    Sobre,
    ComoFunciona,
    FacaParte,
    BuscarServico,
  },
};
</script>
