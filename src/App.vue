<template>
  <SpashPage v-if="cards.splash" />
  <div v-else>
    <HeaderComponent />
    <MainComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/main/MainComponent.vue";
import SpashPage from "./components/SpashPage.vue";
import { cards } from "./store";

export default {
  components: {
    HeaderComponent,
    MainComponent,
    SpashPage,
  },
  data() {
    return {
      cards,
    };
  },
};
</script>

<style lang="scss" scoped></style>
