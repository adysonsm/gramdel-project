<template>
  <v-card height="100%">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="image"></v-img>

    <v-card-title class="text-left pb-0">{{ name }} </v-card-title>

    <v-card-text class="professional-description text-left">
      <v-chip-group multiple>
        <v-chip v-for="(tag, i) in tags" color="primary" small :key="i">{{
          tag
        }}</v-chip>
      </v-chip-group>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="rating"
          color="primary"
          background-color="#3f3f3f"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          {{ `${rating} (${ratingSize} avaliações)` }}
        </div>
      </v-row>
      <div>
        {{ description }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title class="text-left pb-0">Horários disponíveis</v-card-title>

    <v-card-text>
      <v-chip-group column>
        <v-chip v-for="(time, i) in availabilityTime" outlined small :key="i">{{
          time
        }}</v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
      <CustomerModal :dialogFor="name" :professionalNumber="whatsapp" />
    </v-card-actions>
  </v-card>
</template>

<script>
import CustomerModal from "./CustomerModal";
export default {
  components: {
    CustomerModal,
  },
  props: {
    image: String,
    name: String,
    rating: Number,
    ratingSize: Number,
    description: String,
    whatsapp: String,
    availabilityTime: Array,
    tags: Array,
  },
};
</script>


<style >
.professional-description {
  height: 8rem;
}
</style>