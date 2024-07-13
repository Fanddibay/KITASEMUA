document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  dropdownButton.addEventListener("click", function () {
    dropdownMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", function (e) {
    if (
      !dropdownButton.contains(e.target) &&
      !dropdownMenu.contains(e.target)
    ) {
      dropdownMenu.classList.add("hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownButton1");
  const dropdownMenu = document.getElementById("dropdownMenu1");

  dropdownButton.addEventListener("click", function () {
    dropdownMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", function (e) {
    if (
      !dropdownButton.contains(e.target) &&
      !dropdownMenu.contains(e.target)
    ) {
      dropdownMenu.classList.add("hidden");
    }
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar1");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const lottiePlayer = document.querySelector(".lottie-player");
  const staticImage = document.querySelector(".static-img");

  const checkLottieLoaded = setInterval(() => {
    if (lottiePlayer.shadowRoot.querySelector("canvas")) {
      clearInterval(checkLottieLoaded);
      staticImage.classList.add("hidden");
      lottiePlayer.classList.remove("hidden");
    }
  }, 100); // Check every 100ms
});
