// src/scripts/menu.js
// Hamburger-meny funksjonalitet
document
  .querySelector(".hamburger-container")
  ?.addEventListener("click", () => {
    document.querySelector("#menu-list")?.classList.toggle("expanded");
  });
