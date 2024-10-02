// Récupération des éléments HTML5
const allGridItems = [...document.querySelectorAll(".grid__item")];
//console.log(allGridItems);
const popupBackground = document.querySelector("#popup__background");
const popupImage = document.querySelector("#popup__img");

// Déclaration de la fonction openPopup permettant d'ouvrir la popup
const openPopup = (e) => {
  let clickedImageSrc = e.target.src;
  popupBackground.classList.add("active");
  popupImage.src = clickedImageSrc;
};

// Déclarattion de la fonction closePopup permettant de fermer la popup
const closePopup = () => {
  popupBackground.classList.remove("active");
};

// Ecoute de l'événement "click" et appel de la fonction openPopup()
allGridItems.forEach((gridItem) =>
  gridItem.addEventListener("click", openPopup)
);

// Ecoute de l'événement "click"
popupImage.addEventListener("click", (e) => e.stopPropagation());

// Ecoute de l'événement "click" et appel de la fonction closePopup()
popupBackground.addEventListener("click", closePopup);
