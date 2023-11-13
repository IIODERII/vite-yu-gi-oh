import { reactive } from "vue";

export const cards = reactive({
  urlStart: "https://db.ygoprodeck.com/api/v7/",
  urlEnd: "cardinfo.php?num=100&offset=0",
  cardList: [],
});
