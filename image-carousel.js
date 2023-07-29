var currentUrl = window.location.href;
var nextButton = document.querySelectorAll("[data-test='gallery-reel-control-btn-next']");
var buttons = document.querySelectorAll(".gallery-reel-control-btn");
var clicked = false;
var autoEventRaised = false;

// Handles click event for previous/next buttons. Disables autoscroll.
Array.from(buttons).forEach(btn => {
  btn.addEventListener('click', function(event) {
    if(!autoEventRaised) {
      clicked = true;
    }
  });
});

// Handles autoscroll for carousel. Emulates a click.
function carouselClick() {
  if(!clicked) {
    autoEventRaised = true;
    nextButton[0].click();
    autoEventRaised = false;
  }
}

// Run the script every 3 seconds.
// Change example.com with your domain.
if(currentUrl.includes("example.com")) {
  setInterval(carouselClick, 3000);
}
