import { Task } from "./Task.js";
import { Cards } from "./Cards.js";
import { phrases } from "./data.js";

//Data kit

//Variables
const popup = document.querySelector(".popup");

//const listenersOnCards = () => {
//  let draggedItem;
//  //Functions for dragCards
//  function dragStart(e) {
//    draggedItem = this;
//    e.dataTransfer.effectAllowed = "move";
//    this.classList.add("dragged");
//    setTimeout(() => this.classList.add("invisible"), 0);
//  }
//  function dragEnd() {
//    this.classList.remove("dragged", "invisible");
//  }
//  //Functions for dropCards
//  function showPopup(answer) {
//    if (answer === "correct") {
//      popup.textContent = "Good job! Right!";
//      popup.style.color = "darkgreen";
//    } else {
//      popup.textContent = "Try again!";
//      popup.style.color = "darkred";
//    }
//    if (!dragGroup.children.length) {
//      popup.textContent = "Huray! You've completed this task!";
//      popup.style.color = "darkgreen";
//      popup.style.opacity = 1;
//    } else {
//      popup.style.opacity = 1;
//      setTimeout(() => {
//        popup.style.opacity = 0;
//      }, 2000);
//    }
//  }
//  function dragOver(e) {
//    e.preventDefault();
//  }
//  function dragEnter(e) {
//    e.preventDefault();
//    this.classList.add("hovered");
//  }
//  function dragLeave(e) {
//    e.preventDefault();
//    this.classList.remove("hovered");
//  }
//  function dragDrop(e) {
//    this.classList.remove("hovered");
//    if (e.target.dataset.key === draggedItem.dataset.key) {
//      draggedItem.style.width = "100px";
//      draggedItem.style.margin = "10px auto";
//      this.append(draggedItem);
//      showPopup("correct");
//    } else {
//      showPopup("incorrect");
//    }
//  }
//  //Listeners
//  dragCards.forEach((dragCard) => {
//    dragCard.addEventListener("dragstart", dragStart);
//    dragCard.addEventListener("dragend", dragEnd);
//  });
//  dropCards.forEach((dropCard) => {
//    dropCard.addEventListener("dragover", dragOver);
//    dropCard.addEventListener("dragenter", dragEnter);
//    dropCard.addEventListener("dragleave", dragLeave);
//    dropCard.addEventListener("drop", dragDrop);
//  });
//};

const init = () => {
  const cards = new Cards(phrases);
  const task = new Task(cards);
  Task.shuffleCards(cards.dragCards.length, task.dropGroup, task.dragGroup);
  //  listenersOnCards();
};

//Listeners
window.addEventListener("DOMContentLoaded", init);
