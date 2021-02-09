// Write your Javascript code
$(document).ready(function () {

    $('#eye').hover(function () {
        // hide password
        if ($(this).hasClass('fa-eye-slash')) {
            $(this).removeClass('fa-eye-slash');
            $(this).addClass('fa-eye');
            $('.password').attr('type', 'password');
        }
        // show password
        else {
            $(this).removeClass('fa-eye');
            $(this).addClass('fa-eye-slash');
            $('.password').attr('type', 'text');
           
        }
    });
});
