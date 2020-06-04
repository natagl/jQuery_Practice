// Add the jQuery library to the HTML file
// Create a JavaScript file, where you will have all the jQuery queries
// Tasks:
// Add the “selected” class to the first element of the menu
// Add the “middle” class to the middle articles in the <section> tags
// Add the “highlighted” class to the .list-item even elements
// Add a “1px solid #eee” border to the last .list-item element
// In the form, change the border color of the focused input


$(document).ready(function () {
    $("#menu ul li:first").addClass("selected");
    $(".container article:eq(1)").addClass("middle");
    $(".container article:eq(4)").addClass("middle");
    $(".list-item:odd").addClass("highlighted");
    $(".list-item:last").css({
        "border-color": "black",
        "border-weight": "1px",
        "border-style": "solid"
    });

});





