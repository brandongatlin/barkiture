window.onscroll = function() {
  distanceFromTop()
};

let header = document.getElementById("index-header");

function distanceFromTop(){

  if (window.pageYOffset >= 75) {
    header.classList.add("header-small");
    header.classList.remove("header-big");
  } else {
    header.classList.add("header-big");
    header.classList.remove("header-small");
  }
}
