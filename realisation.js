const image = document.querySelectorAll(".img,.imgvh");

const h2pierres = document.querySelector(".h2pierres");
const h3pierresmenu = document.querySelector(".h3pierresmenu");

const h3exterieur = document.querySelector(".h3exterieur");
const menuexterieur = document.querySelector(".titreexterieurh3");

const h3salledebain = document.querySelector(".h3salledebain");
const menusalledebainh3 = document.querySelector(".menusalledebainh3");

function cardcreate() {
  popup = document.createElement("div");
  popup.className = "popup";
}

image.forEach((img) => {
  img.addEventListener("click", (e) => {
    if (typeof popup === "undefined") {
      cardcreate();

      document.body.appendChild(popup);
      popup.innerHTML = `
            <i class="fa-regular fa-circle-xmark fa-lg" id="croix"></i>
            <img src="${e.target.src}" width="100%"/>
        `;
      croix = document.getElementById("croix");
      croix.addEventListener("click", () => {
        setTimeout(() => {
          popup.remove();
          delete popup;
        }, 2);
      });
    }
  });
});

// affichage menu pierres

h2pierres.addEventListener("mouseover", (e) => {
  h3pierresmenu.style.visibility = "visible";
});
h2pierres.addEventListener("mouseout", (e) => {
  h3pierresmenu.style.visibility = "hidden";
});
h3pierresmenu.addEventListener("mouseover", (e) => {
  h3pierresmenu.style.visibility = "visible";
});
h3pierresmenu.addEventListener("mouseout", (e) => {
  h3pierresmenu.style.visibility = "hidden";
});
// affichage menu pierres exterieur

h3exterieur.addEventListener("mouseover", (e) => {
  menuexterieur.style.visibility = "visible";
});
h3exterieur.addEventListener("mouseout", (e) => {
  menuexterieur.style.visibility = "hidden";
});
menuexterieur.addEventListener("mouseover", (e) => {
  menuexterieur.style.visibility = "visible";
});
menuexterieur.addEventListener("mouseout", (e) => {
  menuexterieur.style.visibility = "hidden";
});
menuexterieur.addEventListener("click", (e) => {
  menuexterieur.style.visibility = "hidden";
  h3pierresmenu.style.visibility = "hidden";
});

// affichage menu salle de bain

h3salledebain.addEventListener("mouseover", (e) => {
  menusalledebainh3.style.visibility = "visible";
});
h3salledebain.addEventListener("mouseout", (e) => {
  menusalledebainh3.style.visibility = "hidden";
});
menusalledebainh3.addEventListener("mouseover", (e) => {
  menusalledebainh3.style.visibility = "visible";
});
menusalledebainh3.addEventListener("mouseout", (e) => {
  menusalledebainh3.style.visibility = "hidden";
});
