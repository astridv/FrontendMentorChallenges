let shareContainer = document.getElementById("share-container");
let showSocialsButton = document.getElementById("show-socials-button");

function toggleSocials() {  
  shareContainer.style.display = shareContainer.style.display == "flex" ? "none" : "flex";
  showSocialsButton.classList.toggle("active-icon");
}