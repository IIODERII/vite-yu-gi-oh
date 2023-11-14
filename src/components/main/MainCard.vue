<template>
  <div class="col-2 text-center">
    <div class="h-100">
      <div>
        <img :src="photo" :alt="title" @click="bigger()" :style="big" />
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
  data() {
    return {
      big: "",
    };
  },
  methods: {
    bigger() {
      if (this.big === "") {
        this.big =
          "height: 95vh; width: auto; position: fixed; top: 2.5vh; right: 50%; transform: translateX(50%); z-index: 2000;";
      } else {
        this.big = "";
      }
    },
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

  img {
    width: 100%;
    &:hover {
      transform: scale(1.1);
      transition: all 0.2s;
      cursor: pointer;
    }
  }
}
</style>
