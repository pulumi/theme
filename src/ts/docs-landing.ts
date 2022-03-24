$(function () {
    // If "read more" is selected, show additional content and swap
    // read more text and icon for read less text and icon.
    $("#docs-landing-read-more-trigger").on("click", function () {
        $("#docs-landing-read-more-trigger").addClass("hidden");
        $("#docs-landing-read-less-trigger").removeClass("hidden");
        $("#docs-landing-read-less-trigger").addClass("block");
        $("#docs-landing-read-more-content").removeClass("hidden");
    });

    // If "read less" is selected, hide additional content and swap
    // read more less and icon for read more text and icon.
    $("#docs-landing-read-less-trigger").on("click", function () {
        $("#docs-landing-read-less-trigger").addClass("hidden");
        $("#docs-landing-read-more-trigger").removeClass("hidden");
        $("#docs-landing-read-more-content").addClass("hidden");
    });
});