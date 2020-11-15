<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="success" block>
          <v-icon left>mdi-whatsapp</v-icon>
          Whatsapp
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <v-container>
            <v-card-title>
              <v-list-item-title class="text-center"
                >Antes de entrar em contato, preencha seus dados
                abaixo</v-list-item-title
              >
            </v-card-title>
            <v-row dense>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  outlined
                  label="Nome completo*"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Whatsapp*"
                  outlined
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field outlined label="Email*" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-row class="pl-4 pr-4">
              <v-spacer></v-spacer>
              <v-btn block color="success" outlined @click="dialog = false">
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
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>