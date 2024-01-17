function toggleMode() {
  var element = document.body;
  element.classList.toggle("lightMode");

  // Get the img elements by their id
  const githubImg = document.getElementById("github-image");
  const linkedinImg = document.getElementById("linkedln-image");
  const xImg = document.getElementById("x-logo");

  if (githubImg.src.endsWith("github-mark-white.png")) {
    githubImg.src = "assets/socialsDark/github-mark.png";
    linkedinImg.src = "assets/socialsDark/In-Black-128@2x.png";
    xImg.src = "assets/socialsDark/logo-black.png";
  } else {
    githubImg.src = "assets/socialsLight/github-mark-white.png";
    linkedinImg.src = "assets/socialsLight/In-White-128@2x.png";
    xImg.src = "assets/socialsLight/logo-white.png";
  }

  if (!lightMode) {
    body.classList.add("light-mode");
    body.style.setProperty("--darkBanner", "var(--lightBanner)");
  } else {
    body.classList.remove("light-mode");
    body.style.setProperty("--darkBanner", "var(--originalDarkBanner)");
  }
}
