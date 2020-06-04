// Show&Hide
$(document).ready(function () {
    $(".btn1").click(function () {
        $("p").hide();
    });
    $(".btn2").click(function () {
        $("p").show();
    });
});
// Fadeout&FadeIn
$(document).ready(function () {
    $(".btn3").click(function () {
        $("p").fadeOut(2000);
    });
    $(".btn4").click(function () {
        $("p").fadeIn(1000);
    });
    //FadeToggle
    $(document).ready(function () {
        $(".btn5").click(function () {
            $("p").fadeToggle(1000);
        })
    })

});

$(document).ready(function () {
    $("li").click(function (e) {
        console.log(e.currentTarget.innerHTML);
        // to see HTML in console
    })
});
// To prevent the default behavior of forms, we will use the property preventDefault of event object
$(document).ready(function () {
    $("#signup-form").submit(function (e) {
        e.preventDefault();
        console.log("Your username is " + $("input[name='username']").val());
    });
})

// Change event
$(document).ready(function () {
    $("input, select").change(function () {
        console.log($(this).val());
    })
})

//The on method
$(document).ready(function () {
    $("input, select").on("change", function () {
        console.log("Change event");
    })

    $("input, select").on("focus", function () {
        console.log("Focus event");
    })


})
