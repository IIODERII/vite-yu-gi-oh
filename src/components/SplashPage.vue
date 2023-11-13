<template>
  <div
    class="splash text-white text-center d-flex align-items-center justify-content-center fs-2 flex-wrap"
  >
    <div class="w-100" v-if="!cards.loading">
      <h2 class="my-4">Inserire il numero di carte da generare</h2>
      <input
        type="text"
        class="text-center"
        v-model="cards.numberOfCards"
        @keyup.enter="generate()"
      />
      <button class="btn d-block mx-auto my-4" @click="generate()">
        Genera carte
      </button>
    </div>

    <div class="loading" v-else>
      <span class="px-5">Loading...</span>
      <img
        src="https://ms.yugipedia.com//thumb/e/e5/Back-EN.png/257px-Back-EN.png"
        alt="Loading Card"
      />
    </div>
  </div>
</template>

<script>
import { cards } from "../store";
import axios from "axios";

export default {
  name: "SplashPage",
  data() {
    return {
      cards,
    };
  },
  methods: {
    generate() {
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
        cards.loading = true;
        axios
          .get(
            cards.urlStart +
              cards.urlMiddle +
              cards.numberOfCards +
              cards.urlEnd
          )
          .then((element) => {
            cards.cardList = element.data.data;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.splash {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: url("https://i.pinimg.com/originals/b6/3e/6a/b63e6a702d0d5dd3a0cfb5ce3bb6505b.png");
  background-repeat: no-repeat;
  background-size: cover;

  input {
    width: 5em;
  }

  button {
    background-color: $primaryColor;

    &:hover {
      background-color: #ffac43;
    }
  }

  .loading {
    position: absolute;
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
}
</style>
