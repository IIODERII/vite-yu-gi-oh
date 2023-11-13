<template>
  <main>
    <div class="container p-5">
      <select class="form-select mb-4 mx-3" aria-label="Default select example">
        <option selected>Archetipi</option>
      </select>

      <div class="bg-white p-5">
        <div>
          <div class="bg-black text-white fw-bold p-3">found 100 cards</div>

          <div class="row"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainComponent",
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

main {
  background-color: $primaryColor;
  select {
    max-width: 200px;
  }
}
</style>
