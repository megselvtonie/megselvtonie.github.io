// Hamburger-meny funksjonalitet
document.querySelector(".hamburger")?.addEventListener("click", () => {
  document.querySelector("#menu-list")?.classList.toggle("expanded");
});
