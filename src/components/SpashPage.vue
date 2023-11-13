<template>
  <div
    class="splash text-white text-center d-flex align-items-center justify-content-center fs-2"
  >
    <div>
      <h2 class="my-4">Inserire il numero di carte da generare</h2>
      <input
        type="text"
        class="w-25 text-center"
        v-model="cards.numberOfCards"
        @keyup.enter="generate()"
      />
      <button class="btn d-block mx-auto my-4" @click="generate()">
        Genera carte
      </button>
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
      cards.splash = false;
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

  button {
    background-color: $primaryColor;

    &:hover {
      background-color: #ffac43;
    }
  }
}
</style>
