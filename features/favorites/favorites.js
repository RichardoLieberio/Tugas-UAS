$(document).ready(function() {
    $(".star").on("click", function() {
        $(this).toggleClass("bi-star bi-star-fill");
        $(this).siblings().toggleClass("hide");
    });
});