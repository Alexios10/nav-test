// import ResourcesNav from "./gatherRecourses.js";
import { createNavbar } from "./navbar.js";

export default (function GatherWarriors() {
  const nav = document.querySelector("nav");
  const outputDiv = document.querySelector(".output");

  nav.innerHTML = createNavbar();

  let coinCount = localStorage.getItem("coins") || 0;
  let metalCount = localStorage.getItem("metal") || 0;
  let woodCount = localStorage.getItem("wood") || 0;

  document.querySelector(".coins").innerHTML = coinCount;
  document.querySelector(".metal").innerHTML = metalCount;
  document.querySelector(".wood").innerHTML = woodCount;

  // warriors array
  const warriors = [
    {
      name: "Snake",
      image: "images/warrior-1.jpg",
      coins: 200,
      metal: 0,
      wood: 0,
      numberOfSoliders: 100,
      category: "warrior",
    },
    {
      name: "Giant",
      image: "images/warrior-2.jpg",
      coins: 500,
      metal: 0,
      wood: 0,
      category: "warrior",
    },
    {
      name: "Big Axe",
      image: "images/warrior-3.jpg",
      coins: 150,
      metal: 0,
      wood: 0,
      category: "warrior",
    },
    {
      name: "Thief",
      image: "images/warrior-4.jpg",
      coins: 50,
      metal: 0,
      wood: 0,
      category: "warrior",
    },
    {
      name: "Tanks",
      image: "images/warrior-5.jpg",
      coins: 250,
      metal: 0,
      wood: 0,
      category: "warrior",
    },
    {
      name: "Berserker",
      image: "images/warrior-6.jpg",
      coins: 275,
      metal: 0,
      wood: 0,
      category: "warrior",
    },

    {
      name: "Canon",
      image: "images/cannon.png",
      coins: 500,
      metal: 100,
      wood: 50,
      category: "war-machine",
    },
    {
      name: "Catapult",
      image: "images/catapult.png",
      coins: 350,
      metal: 75,
      wood: 125,
      category: "war-machine",
    },
    {
      name: "War Elephant",
      image: "images/elephant.png",
      coins: 300,
      metal: 0,
      wood: 0,
      category: "war-animal",
    },
  ];

  // function to display warriors and resources
  function displayWarriors() {
    let htmlTxt = "";
    warriors.forEach((warrior) => {
      htmlTxt += `
            <div class="warriors-container">
            <div>
              <h3>${warrior.name}</h3>
              <div class="img-container">
                <img class="warrior-img" src="${warrior.image}" alt="${warrior.name}" />
                <span class="img-number">${warrior.numberOfSoliders}</span>
              </div>
            </div>
              
              <div style="display:flex; gap:5px; font-weight: bolder;"> 
                  <span>Wood: ${warrior.wood}</span>
                  <img style="width:20px;" src="images/wood.png" alt="metal image">
                  <span>Metal: ${warrior.metal}</span>
                  <img style="width:20px;" src="images/metal.png" alt="metal image">
                  <span>Coins: ${warrior.coins}</span>
                  <img style="width:20px;" src="images/coin.png" alt="coin image">
              </div>
              <button class="buy-button" data-coin="${warrior.coins}" data-metal="${warrior.metal}" data-wood="${warrior.wood}">
                buy
              </button>
            </div>
          `;
    });

    outputDiv.innerHTML = htmlTxt;
    const buyButtons = document.querySelectorAll(".buy-button");

    // handling which button is clicked to update the resoureces navbar
    // and your army page
    buyButtons.forEach((button, index) => {
      button.addEventListener("click", (event) => {
        const clickedButton = event.target;
        const coins = parseInt(clickedButton.dataset.coin);
        const metalCost = parseInt(clickedButton.dataset.metal);
        const woodCost = parseInt(clickedButton.dataset.wood);
        // condition to check if there is enough resources to buy a warrior
        if (
          coinCount >= coins &&
          metalCount >= metalCost &&
          woodCount >= woodCost
        ) {
          coinCount -= coins;
          metalCount -= metalCost;
          woodCount -= woodCost;
          // update resources navbar after purchase
          document.querySelector(".coins").innerHTML = coinCount;
          document.querySelector(".metal").innerHTML = metalCount;
          document.querySelector(".wood").innerHTML = woodCount;

          // saving the changes in the localstorage
          localStorage.setItem("coins", coinCount);
          localStorage.setItem("metal", metalCount);
          localStorage.setItem("wood", woodCount);

          // get the current purchased warriors array from localStorage
          let purchasedWarriors =
            JSON.parse(localStorage.getItem("purchasedWarriors")) || [];

          const warriorData = {
            image: warriors[index].image,
            category: warriors[index].category,
          };
          purchasedWarriors.push(warriorData);

          // localStorage.setItem("numberOfWarriors", warriors[index].number);

          // save the updated array back to localStorage
          localStorage.setItem(
            "purchasedWarriors",
            JSON.stringify(purchasedWarriors)
          );
        } else {
          alert(
            "Not enough resources!, go to the resources page and gather more"
          );
        }
      });
    });
  }

  displayWarriors();
})();

// export default (function GetNav() {
//   const nav = document.querySelector("nav");
//   const outputDiv = document.querySelector(".output");

//   nav.innerHTML = `
//       <div class="resources-container">
//         <div
//           style="
//             display: flex;
//             align-items: center;
//             justify-content: space-evenly;
//             width: 100%;
//           "
//         >
//           <div style="display: flex; align-items: center">
//             <img style="width: 30px" src="images/gold-coin.png" alt="" />
//             <span style="margin-left: 5px" class="coins"></span>
//           </div>
//           <div style="display: flex; align-items: center">
//             <img style="width: 30px" src="images/metal.png" alt="" />
//             <span style="margin-left: 5px" class="metal"></span>
//           </div>
//           <div style="display: flex; align-items: center">
//             <img style="width: 30px" src="images/wood.png" alt="" />
//             <span style="margin-left: 5px" class="wood"></span>
//           </div>
//         </div>
//       </div>`;

//   const coin = document.querySelector(".coins");
//   const metal = document.querySelector(".metal");
//   const wood = document.querySelector(".wood");

//   let coinCount = 0;
//   let metalCount = 0;
//   let woodCount = 0;

//   coin.innerHTML = coinCount;
//   metal.innerHTML = metalCount;
//   wood.innerHTML = woodCount;

//   const warriors = [
//     {
//       name: "Snake",
//       image: "images/warrior-1.jpg",
//       price: 200,
//       metal: 0,
//       wood: 0,
//     },
//     {
//       name: "Giant",
//       image: "images/warrior-2.jpg",
//       price: 500,
//       metal: 0,
//       wood: 0,
//     },
//     {
//       name: "Big Axe",
//       image: "images/warrior-3.jpg",
//       price: 150,
//       metal: 0,
//       wood: 0,
//     },
//     {
//       name: "Thief",
//       image: "images/warrior-4.jpg",
//       price: 50,
//       metal: 0,
//       wood: 0,
//     },
//     {
//       name: "Tanks",
//       image: "images/warrior-5.jpg",
//       price: 250,
//       metal: 0,
//       wood: 0,
//     },
//     {
//       name: "Berserker",
//       image: "images/warrior-6.jpg",
//       price: 275,
//       metal: 0,
//       wood: 0,
//     },
//     {
//       name: "Canon",
//       image: "images/cannon.png",
//       price: 500,
//       metal: 100,
//       wood: 50,
//     },
//     {
//       name: "Catapult",
//       image: "images/catapult.png",
//       price: 350,
//       metal: 75,
//       wood: 125,
//     },
//     {
//       name: "War Elephant",
//       image: "images/elephant.png",
//       price: 300,
//       metal: 0,
//       wood: 0,
//     },
//   ];

//   function getWarriors() {
//     let htmlTxt = "";
//     warriors.forEach((warrior) => {
//       htmlTxt += `
//         <div class="warrior">
//           <h3>${warrior.name}</h3>
//           <img style="width:5%;" src="${warrior.image}" alt="${warrior.name}">
//           <div style="display:flex; gap:5px; font-weight: bolder;">
//               <span>Wood: ${warrior.wood}</span>
//               <img style="width:20px;" src="images/wood.png" alt="metal image">
//               <span>Metal: ${warrior.metal}</span>
//               <img style="width:20px;" src="images/metal.png" alt="metal image">
//               <span>Coins: ${warrior.price}</span>
//               <img style="width:20px;" src="images/gold-coin.png" alt="coin image">
//           </div>
//           <button class="buy-button" data-price="${warrior.price}" data-metal="${warrior.metal}" data-wood="${warrior.wood}">
//              buy
//           </button>
//         </div>
//       `;
//     });

//     outputDiv.innerHTML = htmlTxt;
//     const buyButtons = document.querySelectorAll(".buy-button");

//     buyButtons.forEach((button) => {
//       button.addEventListener("click", function () {
//         const price = parseInt(this.getAttribute("data-price"));
//         const metalCost = parseInt(this.getAttribute("data-metal"));
//         const woodCost = parseInt(this.getAttribute("data-wood"));
//         coin.innerHTML = coinCount += 1;
//         localStorage.setItem("coins", coinCount);
//         localStorage.setItem("metal", metalCount);
//         localStorage.setItem("wood", woodCount);
//       });
//     });
//   }

//   getWarriors();

//   return nav;
// })();
