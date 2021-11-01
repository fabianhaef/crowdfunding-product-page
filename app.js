let hamburgerIcon     =     document.getElementById("hamburger-icon");
let closeMenuIcon     =     document.getElementById("close-menu-icon")
let menuIconDiv       =     document.getElementById("menu-icons")
let navMenu           =     document.getElementById("nav")
let overlay           =     document.getElementById("overlay")
let backProjectButton =     document.getElementById("back-project-button")
let backProjectModal  =     document.querySelector(".back-project-modal")
let closeModalIcon    =     document.querySelector(".close-modal")


menuIconDiv.addEventListener('click', () => {
  if(!hamburgerIcon.classList.contains('hidden')) {
    hamburgerIcon.classList.add('hidden');
    closeMenuIcon.classList.remove("hidden");
    navMenu.classList.add("nav");
    overlay.classList.remove('hidden')
    overlay.classList.add("overlay")
  } else {
    closeMenuIcon.classList.add('hidden');
    hamburgerIcon.classList.remove("hidden");
    navMenu.classList.remove("nav");
    overlay.classList.add('hidden')
    overlay.classList.remove("overlay")
  }
})

backProjectButton.addEventListener('click', () => {
  if(backProjectModal.classList.contains("hidden")) {
    backProjectModal.classList.remove("hidden");
    overlay.classList.remove('hidden')
    overlay.classList.add("overlay")
  }
})

closeModalIcon.addEventListener("click", () => {
  if(!backProjectModal.classList.contains("hidden")) {
    backProjectModal.classList.add("hidden")
    overlay.classList.add('hidden')
    overlay.classList.remove("overlay")
  }
})