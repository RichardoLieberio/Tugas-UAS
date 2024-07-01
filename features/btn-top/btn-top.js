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

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnTop").style.display = "block";
  } else {
    document.getElementById("btnTop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}