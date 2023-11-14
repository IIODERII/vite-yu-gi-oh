<template>
  <div class="loading" v-if="cards.loading">
    <span class="px-5">Loading...</span>
    <img src="./assets/images/download.jpg" alt="Loading Card" />
  </div>
  <SplashPage v-if="cards.splash" @generate="generateCards()" />

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
        cards.splash = false;
        cards.loading = true;
        this.params.num = cards.numberOfCards;
        cards.loading = false;
        const url = cards.urlStart + cards.urlEnd;
        axios.get(url, { params: this.params }).then((element) => {
          cards.cardList = element.data.data;
        });
      }
    },
  },
  computed: {
    loading() {
      if (this.params.num < 12500) {
        {
          cards.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-size: 3em;
  background-color: rgba($color: #000000, $alpha: 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  img {
    width: 50px;
    animation-name: rotate;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
