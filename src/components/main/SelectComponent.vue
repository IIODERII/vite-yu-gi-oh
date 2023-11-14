<template>
  <div>
    <label for="archetypes" class="mx-3 fw-bold py-2">Archetypes</label>
    <select
      class="form-select mb-4 mx-3"
      aria-label="Default select example"
      name="archetypes"
      id="archetypes"
      v-model="selectValue"
      @change="$emit('selectChange', selectValue)"
    >
      <option selected value="">All</option>
      <option
        v-for="archetype in cards.archetypeList"
        :key="archetype"
        :value="archetype"
      >
        {{ archetype }}
      </option>
    </select>
  </div>
</template>

<script>
import axios from "axios";
import { cards } from "../../store";
export default {
  name: "SelectComponent",
  data() {
    return {
      cards,
      selectValue: "",
    };
  },
  methods: {},
  created() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/archetypes.php")
      .then((element) => {
        element.data.forEach((arch) => {
          cards.archetypeList.push(arch.archetype_name);
        });
      });
  },
};
</script>

<style lang="scss" scoped>
select {
  max-width: 200px;
}
</style>
