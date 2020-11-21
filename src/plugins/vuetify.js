import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#d90263",
        primaryaccent: "#f2a870",
        secondary: "#faa6a3",
        lightcolor: "#f5e6cc",
        backgroundcolor: "#1b1d19",
        error: "#e65b76",
        info: "#0066b6",
        success: "#34b518",
        warning: "#ec8300",
      },
      dark: {
        primary: "#d90263",
        primaryaccent: "#f2a870",
        secondary: "#faa6a3",
        lightcolor: "#f5e6cc",
        backgroundcolor: "#1b1d19",
        error: "#e65b76",
        info: "#0066b6",
        success: "#34b518",
        warning: "#ec8300",
      },
    },
  },
});
