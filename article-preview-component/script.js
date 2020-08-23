let shareContainer = document.getElementById("share-container");
let contributorContainer = document.getElementById("contributor-container");

function showSocials() {
  if (getWidth() < 600) {
    contributorContainer.style.display = "none";
    shareContainer.style.display = "flex";
  } else {
    shareContainer.style.display = "block";
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

window.onclick = function (event) {
  if (event.target == shareContainer) {
    shareContainer.style.display = "none";
  }
};
