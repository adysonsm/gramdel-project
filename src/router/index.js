import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FacaParte from "../views/EncontrarProfissional.vue";
import SearchProfessioals from "../views/SearchProfessionals.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/faca-parte",
    name: "Faça Parte",
    component: FacaParte,
  },
  {
    path: "/buscar-profissional",
    name: "Buscar Profissional",
    component: SearchProfessioals,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
