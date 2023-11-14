<template>
  <main>
    <div class="container p-5">
      <div class="d-md-flex align-items-center">
        <SelectComponent @select-change="reloadCards" />
        <button class="btn btn-dark m-3" @click="cards.splash = true">
          Cambia il numero di carte da generare
        </button>
      </div>

      <div class="bg-white p-5">
        <div>
          <div class="bg-black text-white fw-bold p-3">
            Found {{ cards.cardList.length }} cards
          </div>

          <div class="row g-4">
            <MainCard
              v-for="card in cards.cardList"
              :photo="card.card_images[0].image_url"
              :title="card.name"
              :archetype="card.archetype"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import MainCard from "./MainCard.vue";
import axios from "axios";
import { cards } from "../../store";
import SelectComponent from "./SelectComponent.vue";
export default {
  name: "MainComponent",
  components: {
    MainCard,
    SelectComponent,
  },
  data() {
    return {
      cards,
      params: {
        num: cards.numberOfCards,
        offset: 0,
        archetype: null,
      },
    };
  },
  methods: {
    reloadCards(value) {
      cards.loading = true;
      this.params.archetype = value;
      const url = cards.urlStart + cards.urlEnd;
      axios
        .get(url, { params: this.params })
        .then((element) => {
          cards.cardList = element.data.data;
          cards.loading = false;
        })
        .catch(function (error) {
          console.log(error);
          this.cards.error = error.message;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

main {
  background-color: $primaryColor;

  button {
    max-width: 200px;
  }
}
</style>
