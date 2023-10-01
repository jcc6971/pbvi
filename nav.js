const sidebar = document.getElementById("side-bar");
const navbar = document.getElementById("navbar");
let flagnav;
sidebar.addEventListener("click", (e) => {
  navbar.style.display = "block";
  flagnav = true;
});

document.body.addEventListener("mouseon", (e) => {
  //   if (flagnav === true) navbar.style.display = "none";
  console.log(flagnav);
});
