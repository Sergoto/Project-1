const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

const openModal = () => {
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
};

openBtn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
