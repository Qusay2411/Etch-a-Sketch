const container = document.querySelector(".container");
const buttonGrid = document.querySelector(".button-input");
const DEFAULT_GRID_SIZE = 16;
let gridsize = DEFAULT_GRID_SIZE;

function buttonClickHandler() {
  let userPrompt;
  userPrompt = prompt("Choose a grid size");
  while (parseInt(userPrompt) > 100 || isNaN(userPrompt)) {
    userPrompt = prompt("Choose a grid size");
    if (isNaN(userPrompt) || userPrompt > 100) {
      alert("Invalid input. Please enter a number or less than 100.");
    } else {
      break;
    }
  }
  gridsize = parseInt(userPrompt);
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  gridSetup(gridsize);
}

// buttonGrid.addEventListener("click", () => {
//   let userPrompt;
//   while (true) {
//     userPrompt = prompt("Choose a grid size");
//     if (isNaN(userPrompt) || userPrompt > 100) {
//       alert("Invalid input. Please enter a number or less than 100.");
//     } else {
//       break;
//     }
//   }
//   gridsize = parseInt(userPrompt);
//   while (container.firstChild) {
//     container.removeChild(container.firstChild);
//   }
//   gridSetup(gridsize);
// });

function gridSetup(gridsize) {
  for (let i = 0; i < gridsize * gridsize; i++) {
    const SQUARE = document.createElement("div");
    SQUARE.style.width = container.clientWidth / gridsize + "px";
    SQUARE.style.height = container.clientWidth / gridsize + "px";
    SQUARE.classList.add("square");
    console.log(SQUARE);
    container.appendChild(SQUARE);
  }
}

function generateRandomNumberFromZeroToTwoFiftyFive() {
  return Math.floor(Math.random() * 256); // Returns a random integer from 0 to 255 (inclusive).
}

function generateRandomColour() {
  let red = generateRandomNumberFromZeroToTwoFiftyFive();
  let green = generateRandomNumberFromZeroToTwoFiftyFive();
  let blue = generateRandomNumberFromZeroToTwoFiftyFive();
  return `rgb(${red}, ${green}, ${blue})`;
}

let opacity = 0.0;
container.addEventListener("mouseover", (e) => {
  if (
    e.target.classList.contains("square") &&
    !e.target.classList.contains("square-hover")
  ) {
    e.target.classList.add("square-hover");
    e.target.style.backgroundColor = generateRandomColour();
    e.target.style.opacity = opacity;
    opacity += 0.1;
    console.log(e.target.style.backgroundColor);
  }
});

gridSetup(DEFAULT_GRID_SIZE);
