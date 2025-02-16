// when someone clicks the hamburger menu
// if nav is closed, open it
// if nav is open, close it

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks the hamburger menu
navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  // if nav is closed, open it
  if (visibility === "false") {
    nav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    nav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }

  // ?WE CAN USE tERNARY
  // const newVisibility = visibility === "false" ? "true" : "false";
  // nav.setAttribute("data-visible", newVisibility);
  // navToggle.setAttribute("aria-expanded", newVisibility);
  // console.log(nav.getAttribute("data-visible"));

  console.log(visibility);
  // if nav is open, close it
});
