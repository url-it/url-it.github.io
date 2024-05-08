function toggleMode() {
  var element = document.body;
  element.classList.toggle("lightMode");

  // Get the img elements by their id
  const githubImg = document.getElementById("github-image");
  const linkedinImg = document.getElementById("linkedln-image");
  const xImg = document.getElementById("x-logo");
  const sunL = document.getElementById("sun");
  const moonD = document.getElementById("moon");

  if (githubImg.src.endsWith("github-mark-white.png")) {
    githubImg.src = "/assets/socialsDark/github-mark.png";
    linkedinImg.src = "/assets/socialsDark/In-Black-128@2x.png";
    xImg.src = "/assets/socialsDark/logo-black.png";
    sunL.style.display = "none";
    moonD.style.display = "block";
  } else {
    githubImg.src = "/assets/socialsLight/github-mark-white.png";
    linkedinImg.src = "/assets/socialsLight/In-White-128@2x.png";
    xImg.src = "/assets/socialsLight/logo-white.png";
    sunL.style.display = "block";
    moonD.style.display = "none";
  }

  if (!lightMode) {
    body.classList.add("light-mode");
    body.style.setProperty("--darkBanner", "var(--lightBanner)");
  } else {
    body.classList.remove("light-mode");
    body.style.setProperty("--darkBanner", "var(--originalDarkBanner)");
  }

  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");
}

// window.addEventListener("scroll", function () {
//   var header = document.querySelector("header");
//   if (window.pageYOffset > 25) {
//     header.style.setProperty("background", "var(--darkBanner)");
//   } else {
//     header.style.setProperty("background", "");
//   }
// });
