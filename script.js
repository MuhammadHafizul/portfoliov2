//to do get all menu buttons
const menuButtons = document.querySelectorAll(".menuButton");

//to do get all menu cards
const menuCards = document.querySelectorAll(".menuCard");

//to do hide all menu cards except the default (Asian Cuisine)
const defaultCard = document.querySelector(".menuCard.it");
defaultCard.classList.add("active");

//to do add click event listener to each menu button
menuButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const cuisine = this.getAttribute("data-cuisine");

    //to do hide all menu cards
    menuCards.forEach((card) => card.classList.remove("active"));

    //to do show the selected cuisine menu card
    const selectedCard = document.querySelector(".menuCard." + cuisine);
    selectedCard.classList.add("active");
  });
});

