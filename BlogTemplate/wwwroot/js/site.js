// Write your Javascript code
$(document).ready(function () {
    //01 password hide show icon
    $('.hide-show-password-icon').mouseenter(function () {
        // show password on mouse enter     
        $('.password').attr('type', 'text');
    });

    $('.hide-show-password-icon').mouseleave(function () {
        // hide password on mouse leave    
        $('.password').attr('type', 'password');
    });

    // nav link and brand color
    $("#nav-bar .nav-item .nav-link, #nav-bar .navbar-brand, #nav-bar .navbar-toggler span").css({ "color": "white" });
    // toggler button color
    $("#nav-bar .navbar-toggler").css({ "border": "2px solid white" });

    // navbar color
    $("#nav-bar .navbar-toggler").click(function () {
        // navbar background
        $("#nav-bar .navbar").css({ "background": "white" })
        // navbar link color
        $("#nav-bar .nav-link, .navbar-brand, .navbar-toggler span").css({ "color": "black" });
        // toggler button border
        $("#nav-bar .navbar-toggler").css({ "border": "2px solid black" });
        //logo change
        $("nav .navbar-brand img").attr("src", "/img/dark-logo-pardeep.png");
    });

    });

// on scroll navbar background color change
$(document).scroll(function () {
    if ($(document).scrollTop() >= 30) {
           //navbar background color
        $(".navbar").css({ "background": "white" })
        //font color
        $("#nav-bar .nav-item .nav-link, #nav-bar .navbar-brand, #nav-bar .navbar-toggler span").not(".link-color").css({ "color": "black" });
        // toggler button border color
        $("#nav-bar .navbar-toggler").css({ "border": "2px solid black" }); 
        // add navbar border and shadow
        $("#nav-bar .navbar").addClass("border-bottom shadow-sm");
        //logo change
        $("nav .navbar-brand img").attr("src", "/img/dark-logo-pardeep.png");
     
    }
    else if ($(document).scrollTop() <= 30) {
           //navbar background color
        $(".navbar").css({ "background": "transparent" });
        //font color
        $("#nav-bar .nav-item .nav-link, #nav-bar .navbar-brand, #nav-bar .navbar-toggler span").css({ "color": "white" });
        // toggler button border color
        $("#nav-bar .navbar-toggler").css({ "border": "2px solid white" }); 
        // remove navbar and shadow border
        $("#nav-bar .navbar").removeClass("border-bottom shadow-sm");
        //logo change
        $("nav .navbar-brand img").attr("src", "/img/logo-pardeep.png");
    };
    // media query for mobile screen 
    if ($(window).width() < 769) {
     //navbar background color
     $(".navbar").css({ "background": "white" });
     //font color
     $("#nav-bar .nav-item .nav-link, #nav-bar .navbar-brand, #nav-bar .navbar-toggler span").not(".link-color").css({ "color": "black" });
     // toggler button border color
     $("#nav-bar .navbar-toggler").css({ "border": "2px solid black" });
     // add navbar border and shadow
        $("#nav-bar .navbar").addClass("border-bottom shadow-sm");
        //logo change
        $("nav .navbar-brand img").attr("src", "/img/dark-logo-pardeep.png");
    };
});

// progress bar
$(window).scroll(function () {
    $('#additonal-info .development').css('width', '85%');
    $('#additonal-info .design').css('width', '76%');
    $('#additonal-info .marketing').css('width', '72%');
    $('#additonal-info .analysis').css('width', '70%');
});

//progress bar tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip({ trigger: 'manual' }).tooltip('show');
});
