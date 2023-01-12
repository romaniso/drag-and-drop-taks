import { Popup } from "./Popup.js";

export class Task {
  constructor(cards) {
    this.dragGroup = document.querySelector(".drag-group");
    this.dropGroup = document.querySelector(".drop-group");
    this.attachCardsToDOM(cards);
    this.cards = cards;
    this.draggedItem;
    this.droppedItem;
  }
  static shuffleCards(number, dropGroup, dragGroup) {
    for (let i = number; i >= 0; i--) {
      dropGroup.appendChild(dropGroup.children[(Math.random() * i) | 0]);
      dragGroup.appendChild(dragGroup.children[(Math.random() * i) | 0]);
    }
  }
  attachCardsToDOM(cards) {
    cards.dragCards.forEach((card) => {
      this.dragGroup.appendChild(card);
      this.listenersOnCards(card);
    });
    cards.dropCards.forEach((card) => {
      this.dropGroup.appendChild(card);
      this.listenersOnCards(card);
    });
  }
  //Listeners
  dragStart(card) {
    this.draggedItem = card;
    card.classList.add("dragged");
    setTimeout(() => card.classList.add("invisible"), 0);
  }
  dragEnd() {
    this.classList.remove("dragged", "invisible");
  }
  dragOver(e) {
    e.preventDefault();
  }
  dragEnter(e) {
    e.preventDefault();
    this.classList.add("hovered");
  }
  dragLeave(e) {
    e.preventDefault();
    this.classList.remove("hovered");
  }
  dragDrop(e) {
    this.droppedItem = e.target;
    e.target.classList.remove("hovered");
    if (e.target.dataset.key === this.draggedItem.dataset.key) {
      this.draggedItem.style.width = "100px";
      this.draggedItem.style.margin = "10px auto";
      this.droppedItem.append(this.draggedItem);
      this.cards.deleteCard(this.draggedItem);
      Popup.showPopup("correct", this.cards.dragCards.length);
      //console.log(this.cards.dragCards, this.draggedItem);
    } else {
      Popup.showPopup("incorrect", this.cards.dragCards.length);
    }
  }
  listenersOnCards(card) {
    if (card.classList.contains("drag-group__item")) {
      card.addEventListener("dragstart", () => this.dragStart(card));
      card.addEventListener("dragend", this.dragEnd);
    } else {
      card.addEventListener("dragover", this.dragOver);
      card.addEventListener("dragenter", this.dragEnter);
      card.addEventListener("dragleave", this.dragLeave);
      card.addEventListener("drop", (e) => this.dragDrop(e));
    }
  }
}
