$("h1").css("color", "red");
$("h1").click(function(){
    alert("Somebody Clicked The h1!!!");
});

$("button:first-of-type").click(function(){
    $(this).css("text-decoration", "line-through");
    alert("First button is clicked!!!");
});

/* $("button").click(function(){
    $(this).css("background-color", "yellow");
    alert("Clicked");
});


$("input").keypress(function(event){
    if(event.which === 13){
        alert("You Hit Enter")
    }
}); */

/* $("button").on("click", function(){
    $("this").css("background-color", "yellow");
    alert("clicked");
});
 */
$("input").on("keypress", function(event){
    if(event.which === 13){
        alert("You Hit Enter");
    };
});

$("button").on("mouseenter", function(){
    $(this).css("font-weight", "bold")
    
});

$("button").on("mouseleave", function(){
    $(this).css("font-weight", "normal")
    
});