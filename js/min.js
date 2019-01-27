$(document).ready(function(){
    $(".login").click(function(){
        $("#shadow").fadeIn(500);
        $(".container").fadeIn(500);
    });


    $(".submitBtn,#shadow").click(function(){
        $("#shadow").fadeOut(500);
        $(".container").fadeOut(500);
    });

});


