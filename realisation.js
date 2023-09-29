const image = document.querySelectorAll(".img");

image.forEach((img) => {
  img.addEventListener("click", (e) => {
    if (typeof popup === "undefined") {
      popup = document.createElement("div");
      popup.className = "popup";
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

// img.addEventListener("mouseout", () => {
//   setTimeout(() => {
//     console.log("ok");
//     popup.remove();
//   }, 2);
// });

//   console.log(e.target.src);
