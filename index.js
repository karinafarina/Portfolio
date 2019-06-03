$(document).ready(function() {
  var navHeight = $('nav').outerHeight();
  $('#main-nav li a').click(function(e) {
    var targetHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(targetHref).offset().top - navHeight
	}, 1000);
    e.preventDefault();
  });
});
