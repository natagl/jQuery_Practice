//1. 
//.ready() method offers a way to run JavaScript code as soon as the page’s Document Object Model (DOM) becomes safe to manipulate
// function executeWhenLoaded() {
//     alert("DOM is Loaded");
// };
// $(document).ready(executeWhenLoaded);

//2. We can use an anonymous function to make it shorter

// $(document).ready(function () {
//     alert("DOM is Loaded");
// });

//3.  
//Shorthand function

// $(function () {
//     alert("DOM is Loaded");
// });

//4. 
//Code included inside on load will run once the entire page (images or iframes), not just the DOM, is ready.

// $(window).on("load", function () {
//     alert("DOM & Images are Loaded");
// })

//5.
// Once the element is selected, the next step is to bind an event handler to the “click” JavaScript event.
// This handler will be a function to be executed each time the event is triggered. In our case, we will display an alert
//$("a");
$(document).ready(function () {
    $("a").click(function (event) {
        alert("Hi Jquery! I Love You!!");
    });
});




