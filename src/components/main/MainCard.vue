<template>
  <div class="col-2 text-center">
    <div class="h-100">
      <div>
        <img :src="photo" :alt="title" class="w-100" />
      </div>
      <div class="text-card px-1">
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
    archetype: { String, default: "Archetype Not found" },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

.col-2 {
  width: calc(100% / 5);
  text-wrap: balance;

  > div {
    background-color: $primaryColor;
  }
}
</style>
