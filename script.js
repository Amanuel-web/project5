document.addEventListener("DOMContentLoaded", function () {
  // Animate elements on scroll
  var animatedElements = document.querySelectorAll(".pricing_img");

  function isInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkAnimation() {
    for (var i = 0; i < animatedElements.length; i++) {
      var element = animatedElements[i];
      if (isInViewport(element)) {
        element.style.animation = "slideUp 1s ease-out";
      }
    }
  }

  // listen for scroll event and check if elements are in view
  window.addEventListener("scroll", checkAnimation);

  // initially check if any elements are in view on load
  checkAnimation();

  // Toggle navigation menu
  var navbarButton = document.querySelector(".navbar_button");
  if (navbarButton) {
    navbarButton.addEventListener("click", function () {
      var isExpanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", String(!isExpanded));
    });
  }
});
