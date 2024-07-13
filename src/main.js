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
  const animations = [
    {
      imgClass: ".static-img",
      containerId: "lottie-container",
      path: "https://lottie.host/ed68ef03-5687-4edd-88e1-b50e9c46ead6/bW3RvQeJGi.json",
      loop: true,
    },
    {
      imgClass: ".static-img_Id",
      containerId: "lottie-containerId",
      path: "https://lottie.host/9345c83a-eb88-457b-88b2-c980b5d3a492/g7LGrA8ItC.json",
      loop: false,
    },
    {
      imgClass: ".static-img_En",
      containerId: "lottie-containerEn",
      path: "https://lottie.host/9054af9a-ccee-4ef1-b1ee-528c54889d7c/JgcZp5pin2.json",
      loop: false,
    },
    {
      imgClass: ".static-img_MobileId",
      containerId: "lottie-containerMobileId",
      path: "https://lottie.host/8326d84d-d6a8-47f3-a3ed-d4e9da6bed05/ZyYK4WaDT7.json",
      loop: false,
    },
    {
      imgClass: ".static-img_MobileEn",
      containerId: "lottie-containerMobileEn",
      path: "https://lottie.host/1aa08efd-a7c3-4c15-879c-14b7c20e195d/KeMtFMi6qj.json",
      loop: false,
    },
  ];

  animations.forEach((animationData) => {
    const staticImage = document.querySelector(animationData.imgClass);
    const lottieContainer = document.getElementById(animationData.containerId);

    const animation = lottie.loadAnimation({
      container: lottieContainer,
      renderer: "svg",
      loop: animationData.loop,
      autoplay: true,
      path: animationData.path,
    });

    animation.addEventListener("DOMLoaded", () => {
      staticImage.classList.add("hidden");
      lottieContainer.classList.remove("hidden");
    });
  });
});
