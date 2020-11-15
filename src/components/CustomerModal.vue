<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="success" block>
          <v-icon left>mdi-whatsapp</v-icon>
          Whatsapp
        </v-btn>
      </template>
      <v-card :loading="loading">
        <v-card-text>
          <v-container>
            <v-card-title>
              <v-list-item-title class="text-center">{{
                `Entrar em contato com: ${dialogFor}`
              }}</v-list-item-title>
            </v-card-title>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row dense>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    outlined
                    label="Nome completo*"
                    required
                    v-model="customerData.name"
                    :rules="nameRules"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Whatsapp*"
                    outlined
                    persistent-hint
                    required
                    v-model="customerData.whatsapp"
                    type="tel"
                    v-mask="'(##) # ####-####'"
                    :rules="whatsappRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    outlined
                    label="Email*"
                    v-model="customerData.email"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-row class="pl-4 pr-4">
              <v-spacer></v-spacer>
              <v-btn
                block
                color="success"
                :disabled="!valid"
                outlined
                @click="sendData"
              >
                <v-icon left>mdi-whatsapp</v-icon>
                Entrar em contato
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import DataService from "../services/DataServices";

export default {
  props: {
    dialogFor: String,
    professionalNumber: String,
  },
  data: () => ({
    dialog: false,
    valid: false,
    loading: false,
    customerDefaultMessage:
      "Olá, peguei seu número pelo site da GlamDel. Quero agendar um serviço",
    customerData: {
      name: "",
      email: "",
      whatsapp: "",
      lookingFor: "",
      type: "customer",
    },
    nameRules: [
      (v) => !!v || "Nome não pode ficar vazio",
      (v) =>
        (v && v.length >= 4) || "Nome muito curto, preencha seu nome completo",
    ],
    emailRules: [
      (v) => !!v || "Email não pode ficar vazio",
      (v) => /.+@.+\..+/.test(v) || "Email inválido",
    ],
    whatsappRules: [
      (v) => !!v || "WhatsApp não pode ficar vazio",
      (v) => (v && v.length >= 16) || "Número de WhatsApp inválido",
    ],
  }),
  methods: {
    async sendData() {
      await this.$refs.form.validate();
      if (this.valid) {
        this.customerData.lookingFor = this.dialogFor;
        this.loading = true;
        DataService.create(this.customerData)
          .then(() => {
            console.log("Created new item successfully!");
          })
          .catch((e) => {
            console.log(e);
          })
          .finally(() => {
            this.loading = true;
            this.dialog = false;
            window.open(
              `https://api.whatsapp.com/send?phone=${this.professionalNumber}&text=${this.customerDefaultMessage}`,
              "_blank"
            );
          });
      }
    },
  },
};
</script>