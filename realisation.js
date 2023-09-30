const image = document.querySelectorAll(".img");
const pierresmenu = document.querySelector(".h3exterieur");
const listpierre = document.querySelector(".exterieur");

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

// affichage menu

pierresmenu.addEventListener("mouseover", (e) => {
  listpierre.style.visibility = "visible";
});
listpierre.addEventListener("mouseover", (e) => {
  listpierre.style.visibility = "visible";
});
listpierre.addEventListener("mouseout", (e) => {
  listpierre.style.visibility = "hidden";
});

pierresmenu.addEventListener("mouseout", (e) => {
  listpierre.style.visibility = "hidden";
});
