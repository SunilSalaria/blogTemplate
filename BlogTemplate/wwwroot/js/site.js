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

    });
