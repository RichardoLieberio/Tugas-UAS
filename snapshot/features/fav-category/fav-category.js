$(document).ready(function() {

    $(document).on("click", ".bi-star-fill", function() {
        const id = $(this).parent().parent().parent().parent().parent().attr("id");
        $(".media").each(function(i, v) {
            if (v.dataset.bsTarget.replace("#", "") == id) {
                $(v).addClass("favorites");
            }
        });
    });

    $(document).on("click", ".bi-star", function() {
        const id = $(this).parent().parent().parent().parent().parent().attr("id");
        $(".media").each(function(i, v) {
            if (v.dataset.bsTarget.replace("#", "") == id) {
                $(v).removeClass("favorites");
            }
        });
    });

});