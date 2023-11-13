<template>
  <header class="d-flex align-items-center p-2">
    <div class="img-cont m-4">
      <img
        src="https://vignette1.wikia.nocookie.net/yugiohenespanol/images/a/aa/Yugioh_anime_logo.jpg/revision/latest?cb=20130310042737&path-prefix=es"
        alt="Logo"
      />
    </div>
    <h1 class="display-4 fw-semibold">Yu-Gi-Oh Api</h1>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss" scoped>
.img-cont {
  width: 100px;

  img {
    width: 100%;
  }
}
</style>
