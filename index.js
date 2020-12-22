const toggleBtn = document.querySelector(".nav-toggle");

toggleBtn.addEventListener("click", () => {
  const toggleImg = document.getElementById("toggle-img");
  const linksContainer = document.querySelector(".links-container");

  var classList = Array.from(linksContainer.classList);
  if (classList.includes("show-links")) {
    linksContainer.classList.remove("show-links");
    toggleImg.src = "./images/icon-hamburger.svg";
  } else {
    linksContainer.classList.add("show-links");
    toggleImg.src = "./images/icon-close.svg";
  }
});
