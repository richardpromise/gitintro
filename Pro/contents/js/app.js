import { youWelcome, youWhat } from "./popups.js";

const App = document.getElementById("App");

const emoticons = {
  sad: "😢",
  happy: "😁",
  glad: "😆",
  angry: "😡",
  no_care: "😒",
  crying: "😭",
};

let userWins = true;
let modal, backdrop;

window.addEventListener("DOMContentLoaded", () => {
  injection(youWelcome);
});

function injection(template) {
  if (modal) {
    return;
  }

  modal = document.createElement("div");
  modal.classList.add("pop-box", "absolute-p", "center-page-f");

  modal.innerHTML = template("", emoticons.happy, emoticons.glad);

  backDrop();
  App.appendChild(modal);
}

function backDrop() {
  if (backdrop) {
    return;
  }

  backdrop = document.createElement("div");
  backdrop.classList.add("backdrop", "fixed-p", "cover-page-p");
  document.body.appendChild(backdrop);
}
