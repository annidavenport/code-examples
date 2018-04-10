const $ = window.jQuery;

$(document).ready(function tabSlideBox () {
  var duration = 0;

  $(window).scroll(function () {
    var topButton = $('#top-apply-button');
    var bottomButton = $('#bottom-apply-button');
    var howToApply = $('#how-to-apply');
    var tabSlideBox = $('#tabSlideBox');
    if (tabSlideBox.length) {
      if (topButton.length || bottomButton.length) {
        if (isElementInViewport(topButton) || isElementInViewport(bottomButton)) {
          tabSlideBox.css('transform','translateX(100%)');
        } else {
          tabSlideBox.css('transform','translateX(0%)');
        }
      } else if (howToApply.length) {
        if (isElementInViewport(howToApply)) {
          tabSlideBox.css('transform','translateX(100%)');
        } else {
          tabSlideBox.css('transform','translateX(0%)');
          $('#cta-widget-arrow').css('transform', 'rotate(90deg)');
        }
      }
    }
  });
});

// This part not written by Anni
function isElementInViewport (el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}
