import { createNavbar } from "./navbar.js";

export default (function GatherResources() {
  const nav = document.querySelector("nav");
  const output = document.querySelector(".output");

  // Set up the navbar
  nav.innerHTML = createNavbar();

  // Grabbing the nav.innerHTML elements from the navbar page
  const coin = document.querySelector(".coins");
  const metal = document.querySelector(".metal");
  const wood = document.querySelector(".wood");

  // Set the initial counters and save on reload
  let coinCount = parseInt(localStorage.getItem("coins") || 0);
  let metalCount = parseInt(localStorage.getItem("metal") || 0);
  let woodCount = parseInt(localStorage.getItem("wood") || 0);

  // Putting the counters in the navbar elements
  coin.innerHTML = coinCount;
  metal.innerHTML = metalCount;
  wood.innerHTML = woodCount;

  output.innerHTML = `
    <div class="resources-container" style="margin-top: 15rem; position:absolute; display: flex; gap: 1rem">
      <div style="cursor: pointer">
        <img id="metal-gold-btn" class="metal-and-gold-img" style="width: 40vw;" src="images/mines-of-thiartha.jpg" alt="mines-picture" />
      </div>
      <div style="cursor: pointer">
        <img id="wood-btn" style="width: 40vw" src="images/woods-of-ghalduz.png" alt="wood-picture" />
      </div>
    </div>
  `;

  // Function to handle user clicks for gathering metal and gold
  function gatherMetalAndGold() {
    let randomIncrementMetal = Math.floor(Math.random() * 75) + 1;
    metalCount += randomIncrementMetal;
    let randomIncrementGold = Math.floor(Math.random() * 25) + 1;
    coinCount += randomIncrementGold;
    localStorage.setItem("metal", metalCount);
    localStorage.setItem("coins", coinCount);
    metal.innerHTML = metalCount;
    coin.innerHTML = coinCount;
  }

  // Function to handle user clicks for gathering wood
  function gatherWoods() {
    let randomIncrementWood = Math.floor(Math.random() * 70);
    woodCount += randomIncrementWood;
    localStorage.setItem("wood", woodCount);
    wood.innerHTML = woodCount;
  }

  // Buttons
  const metalAndGoldBtn = document.querySelector("#metal-gold-btn");
  const woodBtn = document.querySelector("#wood-btn");

  metalAndGoldBtn.onclick = gatherMetalAndGold;
  woodBtn.onclick = gatherWoods;
})();
