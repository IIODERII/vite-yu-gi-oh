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
      <img src="../assets/images/download.jpg" alt="Loading Card" />
    </div>
  </div>
</template>

<script>
import { cards } from "../store";

export default {
  name: "SplashPage",
  data() {
    return {
      cards,
    };
  },
  methods: {
    generate() {
      this.$emit("generate");
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
