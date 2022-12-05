$(".menu-btn").click(function () {
    $(".sidebar").animate({
        marginLeft: 0 
    });
});

$(".hide-btn").click(function () {
    $(".sidebar").animate({
        marginLeft: "-100%" 
    });
});

function go(url) {
    setTimeout(function () {
        location.href = `${url}`;
    },1000)
};

$(function () {
    $('[data-toggle="popover"]').popover()
});

$(".full-screen-btn").click(function () {
    let current = $(this).closest(".card");
    current.toggleClass("full-screen-card");
    if (current.hasClass("full-screen-card")) {
        $(this).html(`<i class="feather-minimize-2"></i>`);
    } else {
        $(this).html(`<i class="feather-maximize-2"></i>`);
    }
});

let screenHeight = $(window).height();
let currentHeight = $(".nav-menu .active").offset().top;
if (currentHeight > screenHeight*0.8) {
    $(".sidebar").animate({
        scrollTop: currentHeight - 100
    },1000)
}