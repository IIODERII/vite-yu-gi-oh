<template>
  <SplashPage v-if="cards.cardList.length < cards.numberOfCards" />

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
};
</script>

<style lang="scss" scoped></style>
