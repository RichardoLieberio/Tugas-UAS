$(document).ready(function() {

  $(window).on("scroll", function() {
    if ($("html").scrollTop() > 20) {
      $("#btnTop").css("display", "block");
    } else {
      $("#btnTop").css("display", "none");
    }
  });

  $("#btnTop").click(function() {
    $("html").scrollTop(0);
  });

});