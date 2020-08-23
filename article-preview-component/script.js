let shareContainer = document.getElementById("share-container");
let contributorContainer = document.getElementById("contributor-container");
let showSocialsButton = document.getElementById("hide-socials-button");

function showSocials() {
  if (getWidth() < 600) {
    contributorContainer.style.display = "none";
    shareContainer.style.display = "flex";
  } else {
    showSocialsButton.style.display = "none";
    shareContainer.style.display = "flex";
  }
}

function hideSocials() {
  shareContainer.style.display = "none";
  contributorContainer.style.display = "flex";
}

function getWidth() {
  xWidth = null;
  if (window.screen != null) xWidth = window.screen.availWidth;

  if (window.innerWidth != null) xWidth = window.innerWidth;

  if (document.body != null) xWidth = document.body.clientWidth;

  console.log(xWidth);
  return xWidth;
}

/* if window gets mobile size:
  remove socials container 
*/

window.onclick = function (event) {
  if (event.target == shareContainer) {
    shareContainer.style.display = "none";
    showSocialsButton.style.display = "inline";
  }
};
