import { reactive } from "vue";

export const cards = reactive({
  numberOfCards: "100",
  urlStart: "https://db.ygoprodeck.com/api/v7/",
  urlEnd: `cardinfo.php`,
  urlArchetypes: "archetypes.php",
  cardList: [],
  loading: false,
  splash: true,
  archetypeList: [],
  error: "",
});
