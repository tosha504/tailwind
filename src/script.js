window.addEventListener("load", (event) => {
  const burger = document.getElementById("burger"),
    menu = document.getElementById("menu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("active");
  });
  console.log("page is fully loaded");
});
