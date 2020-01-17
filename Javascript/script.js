var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var projectsBtn = document.getElementById("projectsBtn");
var skillsBtn = document.getElementById("skillsBtn");
var projectsLoc = document.getElementById("projects");
var navbar = document.getElementById("navbar");
var topBtn = document.getElementById("topBtn");
var topText = document.getElementById("topText");
var botText = document.getElementById("botText");

//For sticky navbar.
window.onscroll = function(){
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};

//For the scrolling that happens when clicking the navbar buttons.
document.querySelectorAll('[data-scroll-to]').forEach(function(element) {
  element.addEventListener('click', function() {
    var scrollToElement = document.querySelector(element.dataset.scrollTo);
    var yFromTop = scrollToElement.offsetTop;
    const navbarHeight = navbar.getBoundingClientRect().height;

    window.scrollTo(0, yFromTop - navbarHeight);
  });
});

//For the animations of the title text onload and onclick of topBtn.
window.onload = function(){
  topText.classList.add("white2black");
  botText.classList.add("white2black2");
};

topBtn.addEventListener("click", function(){
  topText.classList.add("white2black");
  botText.classList.add("white2black2");
});

topText.addEventListener("webkitAnimationEnd", function(){
  topText.classList.remove("white2black");
});

botText.addEventListener("webkitAnimationEnd", function(){
  botText.classList.remove("white2black2");
});
