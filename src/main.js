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
  const staticImage = document.querySelector(".static-img");
  const lottieContainer = document.getElementById("lottie-container");

  const animation = lottie.loadAnimation({
    container: lottieContainer, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "https://lottie.host/ed68ef03-5687-4edd-88e1-b50e9c46ead6/bW3RvQeJGi.json", // the path to the animation json
  });

  animation.addEventListener("DOMLoaded", () => {
    staticImage.classList.add("hidden");
    lottieContainer.classList.remove("hidden");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const staticImageId = document.querySelector(".static-img_Id");
  const lottieContainerId = document.getElementById("lottie-containerId");

  const animation = lottie.loadAnimation({
    container: lottieContainerId, // the dom element that will contain the animation
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "https://lottie.host/9345c83a-eb88-457b-88b2-c980b5d3a492/g7LGrA8ItC.json", // the path to the animation json
  });

  animation.addEventListener("DOMLoaded", () => {
    staticImageId.classList.add("hidden");
    lottieContainerId.classList.remove("hidden");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const staticImageEn = document.querySelector(".static-img_En");
  const lottieContainerEn = document.getElementById("lottie-containerEn");

  const animation = lottie.loadAnimation({
    container: lottieContainerEn, // the dom element that will contain the animation
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "https://lottie.host/9054af9a-ccee-4ef1-b1ee-528c54889d7c/JgcZp5pin2.json", // the path to the animation json
  });

  animation.addEventListener("DOMLoaded", () => {
    staticImageEn.classList.add("hidden");
    lottieContainerEn.classList.remove("hidden");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const staticImageMobileId = document.querySelector(".static-img_MobileId");
  const lottieContainerMobileId = document.getElementById(
    "lottie-containerMobileId"
  );

  const animation = lottie.loadAnimation({
    container: lottieContainerMobileId, // the dom element that will contain the animation
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "https://lottie.host/8326d84d-d6a8-47f3-a3ed-d4e9da6bed05/ZyYK4WaDT7.json", // the path to the animation json
  });

  animation.addEventListener("DOMLoaded", () => {
    staticImageMobileId.classList.add("hidden");
    lottieContainerMobileId.classList.remove("hidden");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const staticImageMobileEn = document.querySelector(".static-img_MobileEn");
  const lottieContainerMobileEn = document.getElementById(
    "lottie-containerMobileEn"
  );

  const animation = lottie.loadAnimation({
    container: lottieContainerMobileEn, // the dom element that will contain the animation
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "https://lottie.host/1aa08efd-a7c3-4c15-879c-14b7c20e195d/KeMtFMi6qj.json", // the path to the animation json
  });

  animation.addEventListener("DOMLoaded", () => {
    staticImageMobileEn.classList.add("hidden");
    lottieContainerMobileEn.classList.remove("hidden");
  });
});
