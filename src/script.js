window.addEventListener("load", (event) => {
  const burger = document.getElementById("burger"),
    menu = document.getElementById("menu"),
    body = document.querySelector("body");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
  });

  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 3, // 👈 Show 3 slides at once
    //   spaceBetween: 10,
    breakpoints: {
      0: {
        slidesPerView: 3,
      },

      768: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 7,
      },
    },
    autoplay: {
      delay: 2500,
    },
    freeModeMomentum: false, // prevents acceleration/deceleration
    allowTouchMove: false,
    simulateTouch: false,
  });
  console.log("page is fully loaded");
});
