export class Popup {
  static showPopup(answer, length) {
    const popup = document.querySelector(".popup");
    if (!length) {
      popup.textContent = "Huray! You've completed this task!";
      popup.style.color = "darkgreen";
      popup.style.opacity = 1;
    } else if (length) {
      if (answer === "correct") {
        popup.textContent = "Good job! Right!";
        popup.style.color = "darkgreen";
      } else {
        popup.textContent = "Try again!";
        popup.style.color = "darkred";
      }
      popup.style.opacity = 1;
      setTimeout(() => {
        popup.style.opacity = 0;
      }, 3000);
    }
  }
}
