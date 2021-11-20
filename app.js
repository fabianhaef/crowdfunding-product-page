const product = {
  "name": "Mastercraft Bamboo Monitor Riser",
  "goal": 100000,
  "funded": 89914,
  "noOfBacker": 5007,
  "daysLeft": 56,
  "bookmarked": false,
  "pledges": [
    {
      "name": "Bamboo Stand",
      "minPledge": 25,
      "left": 101
    },
    {
      "name": "Black Edition Stand",
      "minPledge": 25,
      "left": 64
    },
    {
      "name": "Mahagony Special Edition",
      "minPledge": 200,
      "left": 0
    }
  ]
}


let body                =     document.querySelector('body');
let hamburgerIcon       =     document.getElementById("hamburger-icon");
let closeMenuIcon       =     document.getElementById("close-menu-icon")
let menuIconDiv         =     document.getElementById("menu-icons")
let navMenu             =     document.getElementById("nav")
let overlay             =     document.getElementById("overlay")
let backProjectButton   =     document.getElementById("back-project-button")
let backProjectModal    =     document.querySelector(".back-project-modal")
let closeModalIcon      =     document.querySelector(".close-modal")
let radioButtons        =     document.querySelectorAll(".pledge__radio");
let selectRewardButtons =     document.querySelectorAll(".select-reward");
let bookmarkDiv         =     document.querySelector(".bookmark-div");

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
let modalNumbersLeft    =     document.querySelectorAll('.modal-number');

/* 
      FORM SELECTORS
*/
let noRewardForm        =     document.querySelector('.no-reward-form')
let bamboForm           =     document.querySelector(".bamboo-form")
let blackForm           =     document.querySelector(".black-edition-form")
let successModal        =     document.querySelector(".backing-success-modal")

const mq = window.matchMedia( ("max-width: 768px") );

if(mq.matches) {
  let bookmarkIcon        =     document.querySelector('.bookmark')

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
}

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
    body.classList.add("noscroll")
  } else {
    closeMenuIcon.classList.add('hidden');
    hamburgerIcon.classList.remove("hidden");
    navMenu.classList.remove("nav");
    overlay.classList.add('hidden')
    overlay.classList.remove("overlay")
    body.classList.remove("noscroll")
  }
})

backProjectButton.addEventListener('click', () => {
  if(backProjectModal.classList.contains("hidden")) {
    backProjectModal.classList.remove("hidden");
    overlay.classList.remove('hidden')
    overlay.classList.add("overlay")
  }
})

selectRewardButtons.forEach((selectRewardButton) => {
  selectRewardButton.addEventListener('click', () => {
    if(backProjectModal.classList.contains("hidden")) {
      backProjectModal.classList.remove("hidden");
      overlay.classList.remove('hidden')
      overlay.classList.add("overlay")
    }

    window.scrollTo(0, 0);
  })
})

closeModalIcon.addEventListener("click", () => {
  if(!backProjectModal.classList.contains("hidden")) {
    backProjectModal.classList.add("hidden")
    overlay.classList.add('hidden')
    overlay.classList.remove("overlay")
  }
})




radioButtons.forEach((radioButton) => {
  radioButton.addEventListener(('click'), () => {
    addBorderToSelectedRadioBtn();
    showBackProjectSection(radioButton.parentElement.parentElement);
  })
})




const addBorderToSelectedRadioBtn = () => {
  radioButtons.forEach((btn) => {
    let modalParent = btn.parentElement.parentElement;
    if(btn.checked) {
      modalParent.classList.add("modal-green-border");
    } else {
      modalParent.classList.remove("modal-green-border");
    }
  })
}


const showBackProjectSection = (parentElement) => {
  let childElements = parentElement.children;
  for(let i = 0; i < childElements.length; i++) {
    if (childElements[i].classList.contains('enter-pledge')) {
      let element = childElements[i]
      element.classList.remove('hidden');
    }
  } 
}


noRewardForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const pledgeValue = document.getElementById("number-input-field").value;
  const newTotalFunded = Number(product["funded"]) + Number(pledgeValue);
  fundingTotalFunded.innerHTML = "$" + newTotalFunded

  window.scrollTo(0, 0);
  
  backProjectModal.classList.add("hidden")
  successModal.classList.remove("hidden")
})

bamboForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const pledgeValue = document.getElementById("number-input-field").value;
  const newTotalFunded = Number(product["funded"]) + Number(pledgeValue);
  fundingTotalFunded.innerHTML = "$" + newTotalFunded
  pledgeNumberLeft[0].innerHTML = Number(product["pledges"][0]["left"]) -1 ;
  modalNumbersLeft[0].innerHTML = Number(product["pledges"][0]["left"]) -1 ;
  fundingTotalBackers.innerHTML = Number(product["noOfBacker"]) + 1;

  window.scrollTo(0, 0);

  backProjectModal.classList.add("hidden")
  successModal.classList.remove("hidden")
})



blackForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const pledgeValue = document.getElementById("number-input-field").value;
  const newTotalFunded = Number(product["funded"]) + Number(pledgeValue);
  fundingTotalFunded.innerHTML = "$" + newTotalFunded

  pledgeNumberLeft[1].innerHTML = Number(product["pledges"][1]["left"]) - 1;
  modalNumbersLeft[1].innerHTML = pledgeNumberLeft[1].innerHTML;
  fundingTotalBackers.innerHTML = Number(product["noOfBacker"]) + 1;

  window.scrollTo(0, 0);

  backProjectModal.classList.add("hidden")
  successModal.classList.remove("hidden")
})


bookmarkDiv.addEventListener('click', () => {
  if(product["bookmarked"]) {
    product["bookmarked"] = false;
    bookmarkDiv.innerHTML = "Bookmark"
    bookmarkDiv.style.backgroundImage  = 'url("./images/icon-bookmark.svg")'
    bookmarkDiv.style.backgroundSize = "56px 56px";
    bookmarkDiv.style.backgroundColor = "var(--light-gray)";
    bookmarkDiv.style.color = "var(--dark-gray)";
  } else {
    product["bookmarked"] = true;
    bookmarkDiv.innerHTML = "Bookmarked"
    bookmarkDiv.style.backgroundImage  = 'url("./images/icon-check.svg")'
    bookmarkDiv.style.backgroundSize = "56px 56px";
    bookmarkDiv.style.color = "var(--moderate)";
  }
})