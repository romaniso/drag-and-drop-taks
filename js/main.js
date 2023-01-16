import { Task } from "./Task.js";
import { Cards } from "./Cards.js";
import { phrases } from "./data.js";

const init = () => {
  const cards = new Cards(phrases);
  const task = new Task(cards);
  Task.shuffleCards(cards.dragCards.length, task.dropGroup, task.dragGroup);
};
window.addEventListener("DOMContentLoaded", init);
