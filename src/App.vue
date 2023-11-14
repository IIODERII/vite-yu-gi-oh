<template>
  <SplashPage v-if="splash()" @generate="generateCards()" />

  <div v-else>
    <HeaderComponent />
    <MainComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/main/MainComponent.vue";
import SplashPage from "./components/SplashPage.vue";
import axios from "axios";
import { cards } from "./store";

export default {
  components: {
    HeaderComponent,
    MainComponent,
    SplashPage,
  },
  data() {
    return {
      cards,
      params: {
        num: "",
        offset: 0,
        archetype: null,
      },
    };
  },
  methods: {
    splash() {
      if (
        cards.cardList.length < parseInt(cards.numberOfCards) ||
        parseInt(cards.numberOfCards) === 0 ||
        cards.numberOfCards === "" ||
        isNaN(parseInt(cards.numberOfCards))
      ) {
        return true;
      }
    },
    generateCards() {
      let isNumero = true;
      for (let index = 0; index < cards.numberOfCards.length; index++) {
        const element = cards.numberOfCards[index];
        if (isNaN(parseInt(element)) || cards.numberOfCards === "") {
          isNumero = false;
          return;
        }
      }
      if (
        isNumero &&
        parseInt(cards.numberOfCards) > 0 &&
        parseInt(cards.numberOfCards) <= 12500
      ) {
        this.params.num = cards.numberOfCards;
        cards.loading = true;
        const url = cards.urlStart + cards.urlEnd;
        axios.get(url, { params: this.params }).then((element) => {
          cards.cardList = element.data.data;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
