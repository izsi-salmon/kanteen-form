$(document).ready(function(){
    console.log("Js loaded");
    $("#hamburgerHeader").click(function(){
        console.log("Hamburger is clicked");
        $(".side-nav").addClass('side-nav-width');
    });
    $("#hamburgerNav").click(function(){
        $(".side-nav").removeClass('side-nav-width');
    });
});