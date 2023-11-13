<template>
  <div class="col-2 text-center align-self-stretch">
    <div class="h-100 d-flex flex-wrap justify-content-center">
      <div class="h-auto">
        <img :src="photo" :alt="title" class="w-100" />
      </div>
      <div class="text-card w-100 px-1">
        <h3 class="text-white py-3">{{ title }}</h3>
        <p class="py-3 fs-4">{{ archetype }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCard",
  props: {
    photo: String,
    title: String,
    archetype: String,
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

.col-2 {
  width: calc(100% / 5);

  > div {
    background-color: $primaryColor;
  }
}
</style>
