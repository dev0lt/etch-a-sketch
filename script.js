"use strict";

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

const grid = document.createElement("div");

const wrapper = document.querySelector(".wrapper");

grid.classList.add("grid");

function createGrid(num) {
  function gridColumn(num) {
    for (let i = 1; i <= num; i++) {
      let row = container.cloneNode();
      wrapper.appendChild(row);
    }
  }

  gridColumn(num);

  const containerAll = document.querySelectorAll(".container");

  containerAll.forEach((el) => {
    for (let i = 1; i <= num; i++) {
      let box = grid.cloneNode();
      el.appendChild(box);
    }
  });
}

//////////// button click //////////////

btn.addEventListener("click", function () {
  let x = prompt("enter number of squares per side:");

  if (!x) return;
  if (x > 100) return alert("too much! can't be more than 100");

  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }

  createGrid(x);
  grid.style.width = "10px";
  grid.style.height = "10px";
});
