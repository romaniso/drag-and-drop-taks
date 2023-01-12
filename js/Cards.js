//creates two types of cards: drag and drop

export class Cards {
  constructor(phrases) {
    this.phrases = phrases;
    this.dragCards = [];
    this.dropCards = [];
    this.createCards(phrases);
  }
  createCards(phrases) {
    phrases.forEach((item, index) => {
      //  Drag cards
      const dragCard = document.createElement("article");
      dragCard.className = "drag-group__item";
      dragCard.textContent = item.phrase;
      dragCard.draggable = "true";
      dragCard.dataset.key = index;
      this.dragCards.push(dragCard);
      //Drop Cards
      const dropCard = document.createElement("article");
      dropCard.className = "drop-group__item";
      dropCard.textContent = item.definition;
      dropCard.dataset.key = index;
      this.dropCards.push(dropCard);
    });
  }
  deleteCard(cardToDelete) {
    const newArr = this.dragCards.filter((card) => card !== cardToDelete);
    this.dragCards = newArr;
  }
}
