<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Faça parte e ganha dinheiro</h1>  
      </v-col>
      <v-col cols="12" sm="12" md='6'> 
              <v-img
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      ></v-img>
      </v-col>
     <v-col cols="12" sm="12" md='6'> 
       <v-card class="py-5 px-5">
         <v-row>
           <v-col cols='12 mb-4'>
              <h3>Cadastra-se para receber mais informações</h3>
           </v-col>
              </v-row>
            <v-text-field
            label="Nome"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            label="E-mail"
            outlined
            dense
          ></v-text-field>
        <v-text-field
            label="Telefone"
            outlined
            dense
          ></v-text-field>
          <v-row class="d-md-flex justify-end"> 
            <v-col cols='12' md='6' ms='12' c>
              <v-btn color="primary" width="100%" @click="inserir({name: 'adyson da Silva moreira', email : 'adyson@hotmail.com', telefone: '93 975198591', type : 'profissonal'})">
                Enviar
              </v-btn>
            </v-col>
          </v-row>
       </v-card>
      </v-col>
    </v-row>

    <v-row class="my-8">
      <v-col cols="12" class="text-center">
        <h2>
          Seja um profissional glamdel e tenha vários beneficios
        </h2>
      </v-col>
          <v-col
          class="mt-8"
        cols="12"
        sm="12"
        md="6"
        lg="3"
        v-for="(card, i) in cards"
        :key="i"
      >
        <v-card height="100%" color="" class="pa-4 text-center">
              <div class="pa-7 secondary rounded-circle d-inline-block">
          <v-icon size="50" color="primary">{{ card.icon }}</v-icon>
          </div>

          <v-card-text class="text-center">
            {{ card.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DataService from "../services/DataServices"

export default {
  
  computed: {
    cards() {
      return [
        {
          icon: "mdi-home-account",
          title: "Titulo xpto",
          text: "Você precisa abrir ponto, fala com seus cleintes direto da sua casa",
        },
        {
          icon: "mdi-clock-time-four-outline",
          title: "Titulo xpto",
          text:
            "Faça seu horário de trabalho, escolha os horário que deseja trabalhar",
        },
        {
          icon: "mdi-currency-usd",
          title: "Titulo xpto",
          text: "Lucre, sem precisar fazer investimentos em pontos ou pessoas",
        },
        {
          icon: "mdi-cellphone-message",
          title: "Titulo xpto",
          text:
            "Negocie com seus clientes pelo telefone",
        },
      ];
    },
  },
  methods: {
      inserir(data){

    DataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
        

  },
  },
  
};

</script>

