initBurgerMenu();

function initBurgerMenu() {
  const menuNavbar = document.getElementById("menu");
  const menuButton = document.getElementById("menu-button");
  
  menuButton.addEventListener("click", () => {
    menuNavbar.classList.toggle("expanded");
  });
}