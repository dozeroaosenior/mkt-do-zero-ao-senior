$(document).ready(function(){
    $(".toogle-menu").on("click", function(e){
        e.preventDefault();
        $(".menu-mobile").toggle();
    })
});