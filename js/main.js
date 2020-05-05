const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

const clickModalHandler = () => {
  modal.classList.toggle("is-open");
};


cartButton.addEventListener("click", clickModalHandler);
close.addEventListener("click", clickModalHandler);
