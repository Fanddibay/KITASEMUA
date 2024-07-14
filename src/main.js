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
      path: "https://lottie.host/98816cf7-2972-432d-8222-a724e8f20e84/nfSgqsrmPW.json",
      loop: false,
    },
    {
      imgClass: ".static-img_En",
      containerId: "lottie-containerEn",
      path: "https://lottie.host/8ef8a2ad-54ac-4039-9023-07c1ec42262f/WI8SGhKUy8.json",
      loop: false,
    },
    {
      imgClass: ".static-img_MobileId",
      containerId: "lottie-containerMobileId",
      path: "https://lottie.host/636156d3-1bf8-43a9-9a28-c76cbaf8e061/SdIycWk2Ry.json",
      loop: false,
    },
    {
      imgClass: ".static-img_MobileEn",
      containerId: "lottie-containerMobileEn",
      path: "https://lottie.host/b40ca5f5-d9ce-4791-b8bf-8510e4217f6e/cBTeHcpVyc.json",
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

function validateEmail(event) {
  event.preventDefault();

  const emailInput = document.querySelector('input[type="email"]');
  const email = emailInput.value;
  const successEmail = document.getElementById("successEmail");
  const wrongEmail = document.getElementById("wrongEmail");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailPattern.test(email);

  if (isValidEmail) {
    successEmail.classList.remove("hidden");
    wrongEmail.classList.add("hidden");
    setTimeout(() => {
      successEmail.classList.add("hidden");
    }, 5000);
  } else {
    wrongEmail.classList.remove("hidden");
    successEmail.classList.add("hidden");
    setTimeout(() => {
      wrongEmail.classList.add("hidden");
    }, 5000);
  }
}

function validateEmailFooter(event) {
  event.preventDefault();

  const emailInput = document.querySelector('input[type="email"]');
  const email = emailInput.value;
  const successEmail = document.getElementById("successEmailFooter");
  const wrongEmail = document.getElementById("wrongEmailFooter");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailPattern.test(email);

  if (isValidEmail) {
    successEmail.classList.remove("hidden");
    wrongEmail.classList.add("hidden");
    setTimeout(() => {
      successEmail.classList.add("hidden");
    }, 5000);
  } else {
    wrongEmail.classList.remove("hidden");
    successEmail.classList.add("hidden");
    setTimeout(() => {
      wrongEmail.classList.add("hidden");
    }, 5000);
  }
}
