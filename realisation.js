const image = document.querySelectorAll(".img");

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
// pierresel = document.querySelector(".pierresel");
// pierresel.addEventListener("click", (e) => {
//   console.log("ok");
// });
// choix =
//   document.getElementById("select").options[
//     document.getElementById("select").selectedIndex
//   ].text;

select.addEventListener("click", (e) => {
  choix =
    document.getElementById("select").options[
      document.getElementById("select").selectedIndex
    ].text;
  console.log(choix);
});
