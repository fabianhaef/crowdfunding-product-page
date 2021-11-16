import product from './product.js'

let bookmarkIcon        =     document.querySelector('.bookmark')
let hamburgerIcon       =     document.getElementById("hamburger-icon");
let closeMenuIcon       =     document.getElementById("close-menu-icon")
let menuIconDiv         =     document.getElementById("menu-icons")
let navMenu             =     document.getElementById("nav")
let overlay             =     document.getElementById("overlay")
let backProjectButton   =     document.getElementById("back-project-button")
let backProjectModal    =     document.querySelector(".back-project-modal")
let closeModalIcon      =     document.querySelector(".close-modal")


let radioButtons        =     document.querySelectorAll(".pledge__radio");


/* 
      PRODUCT SELECTORS
*/
let fundingName         =     document.querySelector('.funding-name');   
let fundingTotalFunded  =     document.querySelector('.funding_stat-total-funded');
let fundingTotalBackers =     document.querySelector('.funding__stat-total-backers');
let fundingDaysLeft     =     document.querySelector(".funding_stat-days-left");

let pledgeTitles        =     document.querySelectorAll('.about__pledge-name');
let pledgeNumberLeft    =     document.querySelectorAll('.about__pledge-left')

let modalTitles         =     document.querySelectorAll(".modal-title");
let modalNumbersLeft     =     document.querySelectorAll('.modal-number');

for(let i = 0; i < pledgeTitles.length; i++){
  pledgeTitles[i].innerHTML = product["pledges"][i]["name"];
  pledgeNumberLeft[i].innerHTML = product["pledges"][i]["left"];
  modalTitles[i].innerHTML = product["pledges"][i]["name"];
  modalNumbersLeft[i].innerHTML = product["pledges"][i]["left"];
}



/* INIT FUNDING ELEMENTS */
fundingName.innerHTML           = product["name"];
fundingTotalFunded.innerHTML    = '$' + product["funded"];
fundingTotalBackers.innerHTML   = product["noOfBacker"];
fundingDaysLeft.innerHTML       = product["daysLeft"];


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


/* Event listener to check if product is already bookmarked */

bookmarkIcon.addEventListener('click', () => {
  if(product["bookmarked"]) {
    product["bookmarked"] = false;
    bookmarkIcon.src = "./images/icon-bookmark.svg";
  } else {
    product["bookmarked"] = true;
    bookmarkIcon.src = "./images/icon-check.svg";
  }
})



radioButtons.forEach((radioButton) => {
  radioButton.addEventListener(('click'), () => {
    let currentModal = radioButton.parentElement.parentElement;
    currentModal.style.border = "1px solid var(--dark)"
  })
})