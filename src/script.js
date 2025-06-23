window.addEventListener("load", (event) => {
  const burger = document.getElementById("burger"),
    menu = document.getElementById("menu"),
    body = document.querySelector("body");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
  });
  console.log("page is fully loaded");
});
