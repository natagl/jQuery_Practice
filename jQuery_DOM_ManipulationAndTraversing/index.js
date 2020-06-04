// $(document).ready(function () {

// });
// click on each heart
$(document).ready(function () {
    $('.heart').click(function () {
        $(this).addClass('on');
    });

});
//prevAll() selects all previous siblings of a set of elements
$(document).ready(function () {
    $('.heart').click(function () {
        $(this).addClass('on');
        $(this).prevAll().addClass('on');
    });

});
//emove a node easily with the remove() 
$(document).ready(function () {
    $(".fa").on("click", function () {
        $(this).parent().remove();
    });
    $(".btn").on("click", function () {
        var newTask = prompt("Add new task");
        var formattedTask = ("<li><span>" + newTask + "</span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> </li>");
        $("#task-list").append(formattedTask);
    });


});