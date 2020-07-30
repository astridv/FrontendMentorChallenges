function showSocials() {
  let contributorContainer = document.getElementById("contributor-container");
  let shareContainer = document.getElementById("share-container");
  contributorContainer.style.display = "none";
  shareContainer.style.display = "flex";
}

function hideSocials() {
  let shareContainer = document.getElementById("share-container");
  let contributorContainer = document.getElementById("contributor-container");
  shareContainer.style.display = "none";
  contributorContainer.style.display = "flex";
}
