let shareContainer = document.getElementById("share-container");
let contributorContainer = document.getElementById("contributor-container");
let showSocialsButton = document.getElementById("hide-socials-button");
let shareIcon = document.getElementById("share-icon");


function toggleSocials() {
  console.log("showSocials method fired");
  if (getWidth() < 600) {
    contributorContainer.style.display = "none";
    shareContainer.style.display = "flex";
  } else {
    let displaySetting = shareContainer.style.display;
    /* if shareContainer is not visible */
    if (displaySetting == "none") {
      showSocialsButton.style.display = "none";
      shareContainer.style.display = "flex";
    }
    else {
      showSocialsButton.style.display = "flex";
      shareContainer.style.display = "none";
    }
    
  }
}

function hideSocialsOnMobile() {
  shareContainer.style.display = "none";
  contributorContainer.style.display = "flex";
}

function getWidth() {
  xWidth = null;
  if (window.screen != null) xWidth = window.screen.availWidth;

  if (window.innerWidth != null) xWidth = window.innerWidth;

  if (document.body != null) xWidth = document.body.clientWidth;
  return xWidth;
}




