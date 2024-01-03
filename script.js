"use strict";

const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const reset = document.querySelector(".reset");
const slider = document.querySelector(".slider");

////////// create grid of boxes //////////////////

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
    for (let i = 1; i <= containerAll.length; i++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");

      grid.style.setProperty("height", `calc(640px / ${containerAll.length})`);

      grid.style.setProperty("width", `calc(640px / ${containerAll.length})`);

      let box = grid.cloneNode();
      el.appendChild(box);
    }
  });
}
let gridAll;

/////////// slider - instead of button //////////////

createGrid(slider.value);

slider.oninput = function () {
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }
  createGrid(slider.value);
  return (gridAll = document.querySelectorAll(".grid"));
};

//////////// disable button //////////////////

reset.addEventListener("click", function () {
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }

  createGrid(slider.value);

  // option if button is available
  // btn.disabled = !btn.disabled;
});

/////////// box coloring event ///////////////////////

wrapper.addEventListener("mouseover", (e) => {
  if (e.target === wrapper) return;
  e.target.style.setProperty("background-color", "black");
});

//////////// button click - CHANGED TO SLIDER //////////////

/*
btn.addEventListener("click", function () {
  let x = prompt("enter number of squares per side:");

  if (!x) return;
  if (x > 100) return alert("too much! can't be more than 100");

  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }

  createGrid(x);
  return (gridAll = document.querySelectorAll(".grid"));
});
*/
