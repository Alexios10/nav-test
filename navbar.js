export function createNavbar() {
  const navbar = `
  <head>  
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
  </head>
<header class="header">
      <nav class="navbar">
        <div class="header-logo">
          <a href="home.html">ArmiesOfZondor</a>

          <button class="reset-btn" >
            Reset
          </button>
        </div> 

        <div class="resources-container">
          <div class = "content-container">
            <div style="display: flex; align-items: center">
            <img style="width: 30px" src="images/coin.png" alt="" />
            <span style="margin-left: 5px" class="coins"></span>
          </div>
        <div style="display: flex; align-items: center">
          <img style="width: 30px" src="images/metal.png" alt="" />
          <span style="margin-left: 5px" class="metal"></span>
        </div>
        <div style="display: flex; align-items: center">
          <img style="width: 30px" src="images/wood.png" alt="" />
          <span style="margin-left: 5px" class="wood"></span>
        </div>
      </div>
    </div>

        <ul class="nav-links-container">
          <li>
            <a href="home.html">
            <img style="max-width:40%;" src="images/home-logo.png" alt="">
            Home
            </a>
          </li>
          <li>
            <a href="gatherRecourses.html">
              <img style="max-width:40%;" src="images/recources-logo.png" alt="">
              Get resources
            </a>
          </li>
          <li>
            <a href="yourArmy.html">
              <img style="max-width:40%;" src="images/army-logo.png" alt="">
              Your army
            </a>
          </li>
        </ul>

      <!-- mobile nav -->
      <div class="mobile-nav-container">
      <div class="overlay"></div>
        <button class="hamburger-menu-btn">
          <span class="material-symbols-outlined">menu</span>
        </button>

        <div id="mobile-navbar">
          <button class="close-btn">X</button>
          <ul style="height:100%">
            <li style="position:absolute">
              <a href="home.html">Home</a>
            </li>
            <li  style="position:absolute; top:5rem">
              <a href="gatherRecourses.html">
                Get resources
              </a>
            </li>
            <li  style="margin-top:12.7rem">
              <a href="yourArmy.html">
                Your army
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- mobile nav end-->
      </nav>

    </header>
`;

  document.addEventListener("DOMContentLoaded", function () {
    const resetBtn = document.querySelector(".reset-btn");

    resetBtn.onclick = () => {
      localStorage.clear();
      window.location.reload();
    };

    const mobileNavBtn = document.querySelector(".hamburger-menu-btn");
    const navBar = document.querySelector("#mobile-navbar");
    const overlay = document.querySelector(".overlay");
    const closeBtn = document.querySelector(".close-btn");

    mobileNavBtn.onclick = function () {
      navBar.classList.add("active");
      overlay.classList.add("active");
      closeBtn.classList.add("active");
    };

    closeBtn.onclick = function () {
      // Trigger the slideOut animation
      navBar.style.animation = "slideOut 0.5s forwards";

      // Wait for the animation to finish before removing the active class
      setTimeout(() => {
        navBar.classList.remove("active");
        navBar.style.animation = "";
        overlay.classList.remove("active");
        closeBtn.classList.remove("active");
      }, 500);
    };
  });
  return navbar;
}
