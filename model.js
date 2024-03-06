const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");

const CloseModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const OpenModel = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

console.log(btnOpen);

for (let i = 0; i < btnOpen.length; i++)
  btnOpen[i].addEventListener("click", OpenModel);

btnClose.addEventListener("click", CloseModel);
overlay.addEventListener("click", CloseModel);

document.addEventListener("keydown", function (e) {
  if (e.key === `Escape` && !modal.classList.contains("hidden")) {
    CloseModel();
  }
});
