<template>
  <main>
    <div class="container p-5">
      <select class="form-select mb-4 mx-3" aria-label="Default select example">
        <option selected>Archetipi</option>
      </select>

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
export default {
  name: "MainComponent",
  components: {
    MainCard,
  },
  data() {
    return {
      cards,
    };
  },
  methods: {
    getCards() {
      axios.get(this.cards.urlStart + this.cards.urlEnd).then((element) => {
        this.cards.cardList = element.data.data;
      });
    },
  },
  created() {
    this.getCards();
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

main {
  background-color: $primaryColor;
  select {
    max-width: 200px;
  }
}
</style>
