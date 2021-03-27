let slider = document.getElementById('pageviews');
let pageviewsNum = document.getElementById('pageviewsNumber');
let priceElement = document.getElementById('price');
let pageviews;
let price;

// set intial values of slider
priceElement.innerHTML = 16;
pageviewsNum.innerHTML = '100K';

slider.oninput = function() {
  /* handle fill color in chrome */
  let value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'

  updateViewsAndPrice(this.value);
}

function updateViewsAndPrice(views) {
    console.log(views);
    switch(+views) {
        case 1:
            price = 8;
            pageviews = '10K';
            break;
        case 2:
            price = 12;
            pageviews = '50K';
            break;
        case 3:
            price = 16;
            pageviews = '100K';
            break;
        case 4:
            price = 24;
            pageviews = '500K';
            break;
        case 5:
            price = 36;
            pageviews = '1M';
            break;
    }
  priceElement.innerHTML = price;
  pageviewsNum.innerHTML = pageviews;
}