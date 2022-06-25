$(".img1").click(function() {
    $(".img2").fadeOut();
    $("body").css("background-color", "green");
    $("body").css("background-color", "green");
    $(".c").show();
});

$(".img2").click(function() {
    $(".img1").fadeOut();
    $("body").css("background-color", "red");
    $(".i").show();
});

$(".img1").dblclick(function() {
    $("p").hide();
    $(".img1").fadeOut();
    $("body").
    css("background-color", "aqua");
    $("h2").text("Which staff are you selecting");
});