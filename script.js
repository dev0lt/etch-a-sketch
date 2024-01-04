"use strict";

const canvas = document.querySelector(".canvas");
const container = document.querySelector(".container");
const cta = document.querySelector(".cta");
const reset = document.querySelector(".reset");
const slider = document.querySelector(".slider");
const btnRgb = document.querySelector(".btnRgb");
const sizeIndicator = document.querySelector(".sizeIndicator");

////////// create grid of boxes //////////////////

function createGrid(num) {
  function gridColumn(num) {
    for (let i = 1; i <= num; i++) {
      let row = container.cloneNode();
      canvas.appendChild(row);
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

/////////// slider - instead of button //////////////

createGrid(slider.value);

slider.onchange = function () {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
  createGrid(slider.value);

  // return (gridAll = document.querySelectorAll(".grid"));
};

slider.oninput = function () {
  sizeIndicator.textContent = `${slider.value}x${slider.value}`;
};

//////////// disable button //////////////////

reset.addEventListener("click", function () {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }

  createGrid(slider.value);

  // option if button is available
  // cta.disabled = !cta.disabled;
});

/////////// color black - click event ///////////////////////

function colorBlck() {
  canvas.addEventListener("mouseover", (e) => {
    if (e.target === canvas) return;
    e.target.style.setProperty("background-color", "black");
  });
}
colorBlck();

///////////// color rgb - click event //////////////////

function colorRgb() {
  const rgb = document.querySelector(".rgb");
  rgb.addEventListener("mouseover", (e) => {
    if (e.target === canvas) return;
    e.target.style.setProperty(
      "background-color",
      `#${Math.floor(Math.random() * 16777215).toString(16)}`
    );
  });
}

//////////// toggle button /////////////////

btnRgb.addEventListener("click", function () {
  canvas.classList.toggle("rgb");

  if (!canvas.classList.contains("rgb")) colorBlck();

  if (canvas.classList.contains("rgb")) colorRgb();
});

//////////// button click - CHANGED TO SLIDER //////////////

/*
cta.addEventListener("click", function () {
  let x = prompt("enter number of squares per side:");

  if (!x) return;
  if (x > 100) return alert("too much! can't be more than 100");

  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }

  createGrid(x);
  return (gridAll = document.querySelectorAll(".grid"));
});
*/
