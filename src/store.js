import { reactive } from "vue";

export const cards = reactive({
  numberOfCards: "100",
  urlStart: "https://db.ygoprodeck.com/api/v7/",
  urlMiddle: `cardinfo.php?num=`,
  urlEnd: "&offset=0",
  cardList: [],
  loading: false,
});
