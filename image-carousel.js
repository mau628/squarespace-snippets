var currentUrl = window.location.href;
var btnCarousel = document.querySelectorAll("[data-test='gallery-reel-control-btn-next']");
var buttons = document.querySelectorAll(".gallery-reel-control-btn");
var clicked = false;
var autoEventRaised = false;

Array.from(buttons).forEach(btn => {
  btn.addEventListener('click', function(event) {
    if(!autoEventRaised) {
      clicked = true;
    }
  });
});

function carouselClick() {
  if(!clicked) {
    autoEventRaised = true;
    btnCarousel[0].click();
    autoEventRaised = false;
  }
}

if(currentUrl.includes("example.com")) {
  setInterval(carouselClick, 3000);
}
