"use strict";

const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

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

      grid.style.setProperty("height", `calc(900px / ${containerAll.length})`);

      grid.style.setProperty("width", `calc(900px / ${containerAll.length})`);

      let box = grid.cloneNode();
      el.appendChild(box);
    }
  });
}

//////////// button click //////////////

let gridAll;

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

/////////// box coloring event ///////////////////////

wrapper.addEventListener("mouseover", (e) => {
  if (e.target === wrapper) return;
  e.target.style.setProperty("background-color", "black");

  // console.log(e.target);
  // if (!gridAll) return;

  // gridAll.forEach((x) => {
  //   console.log(x);
  //   x.style.setProperty("background-color", "black");
  // });
});
