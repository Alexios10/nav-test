import { createNavbar } from "./navbar.js";

// HTML elements
const nav = document.querySelector("nav");
const warriorSection = document.querySelector(".warrior-section");
const warriorPharagraph = document.querySelector(".warrior-paragraph");

const warMachineSection = document.querySelector(".war-machine-section");
const warMachinePharagraph = document.querySelector(".war-machine-paragraph");

const warAnimalSection = document.querySelector(".war-animal-section");
const warAnimalPharagraph = document.querySelector(".war-animal-paragraph");

const noWarriorsContainer = document.querySelector(".no-warriors-container");

const warriors = JSON.parse(localStorage.getItem("purchasedWarriors"));

if (warriors && warriors.length > 0) {
  warriors.forEach((warrior) => {
    if (warrior.category === "warrior") {
      warriorPharagraph.innerHTML = "Warriors";
      warriorSection.innerHTML += `<img style="width:70px; margin-left:1rem;" src=${warrior.image} alt="warrior image" />`;
    } else if (warrior.category === "war-machine") {
      warMachinePharagraph.innerHTML = "War machine";
      warMachineSection.innerHTML += `<img style="width:90px; margin-left:1rem" src=${warrior.image} alt="war-machine image" />`;
    } else if (warrior.category === "war-animal") {
      warAnimalPharagraph.innerHTML = "War animal";
      warAnimalSection.innerHTML += `<img style="width:100px; margin-left:1rem" src=${warrior.image} alt="war-animal image" />`;
    }
  });
} else {
  // If no warriors are purchased, show this message
  noWarriorsContainer.innerHTML = `
  <p>No warrior purchased! Go to the main page and buy warriors. But remember you need resources for that</p>
  <img src="images/warriors.png" alt="no warriors" />`;
  warriorSection.innerHTML = "";
  warMachineSection.innerHTML = "";
  warAnimalSection.innerHTML = "";
}

nav.innerHTML = createNavbar();

let coinCount = localStorage.getItem("coins") || 0;
let metalCount = localStorage.getItem("metal") || 0;
let woodCount = localStorage.getItem("wood") || 0;

document.querySelector(".coins").innerHTML = coinCount;
document.querySelector(".metal").innerHTML = metalCount;
document.querySelector(".wood").innerHTML = woodCount;
