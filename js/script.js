$(document).ready(function(){
    console.log("Js loaded");
    $("#hamburgerHeader").click(function(){
        console.log("Hamburger is clicked");
        $(".side-nav").toggleClass('side-nav-width');
    });
});