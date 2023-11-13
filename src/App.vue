<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/main/MainComponent.vue";
export default {
  components: {
    HeaderComponent,
    MainComponent,
  },
};
</script>

<style lang="scss" scoped></style>
