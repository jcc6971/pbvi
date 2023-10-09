const carousel = document.querySelector(".img-carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let carsouselImages = document.querySelectorAll(".img-carousel div");
const selectionh2 = document.querySelectorAll("h2");
const imgagescarousel = document.getElementById("imgages-carousel");

selectionh2.forEach((list) => {
  list.addEventListener("click", (e) => {
    if (window.getComputedStyle(imgagescarousel).display == "none") {
      imgagescarousel.style.display = "grid";
      croix.style.visibility = "visible";
      idlist = e.target.parentElement.id;
      const appui = {
        img1: "./images/pierres/" + idlist + "1.png",
        img2: "./images/pierres/" + idlist + "2.png",
        img3: "./images/pierres/" + idlist + "3.png",
        img4: "./images/pierres/" + idlist + "4.png",
        img5: "./images/pierres/" + idlist + "5.png",
        img6: "./images/pierres/" + idlist + "6.png",
      };
      image1.src = appui.img1;
      image2.src = appui.img2;
      image3.src = appui.img3;
      image4.src = appui.img4;
      image5.src = appui.img5;
      image6.src = appui.img6;
      croix.addEventListener("click", (e) => {
        imgagescarousel.style.display = "none";
      });
      carousel.scrollTo(0, 0);
    }
  });
});

//Next Carousel
const nextCarousel = () => {
  if (carsouselImages[carsouselImages.length - 1]) {
    carousel.scrollTo(0, 0);
  }
  carousel.scrollBy(300, 0);
};

nextBtn.addEventListener("click", (e) => {
  nextCarousel();
});

//Prev Carousel
const prevCarousel = () => {
  if (carsouselImages[0]) {
    carousel.scrollTo(4800, 0);
  }
  carousel.scrollBy(-300, 0);
};

prevBtn.addEventListener("click", (e) => {
  prevCarousel();
});

// Auto carousel
const auto = true; // Auto scroll
const intervalTime = 5000;
let sliderInterval;

if (auto) {
  sliderInterval = setInterval(nextCarousel, intervalTime);
}

carousel.addEventListener("mouseover", (stopInterval) => {
  clearInterval(sliderInterval);
});

carousel.addEventListener("mouseleave", (startInterval) => {
  if (auto) {
    sliderInterval = setInterval(nextCarousel, intervalTime);
  }
});

//for mobile events
carousel.addEventListener("touchstart", (stopIntervalT) => {
  clearInterval(sliderInterval);
});
carousel.addEventListener("touchend", (startIntervalT) => {
  if (auto) {
    sliderInterval = setInterval(nextCarousel, intervalTime);
  }
});

//Debounce
var previousCall;
window.addEventListener("resize", () => {
  if (previousCall >= 0) {
    clearTimeout(previousCall);
  }
  previousCall = setTimeout(() => {
    carousel.scrollBy(-300, 0);
  }, 200);
});
