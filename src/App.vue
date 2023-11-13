<template>
  <SplashPage v-if="splash()" />

  <div v-else>
    <HeaderComponent />
    <MainComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/main/MainComponent.vue";
import SplashPage from "./components/SplashPage.vue";
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
  },
};
</script>

<style lang="scss" scoped></style>
