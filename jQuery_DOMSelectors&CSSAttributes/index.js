// 1. ("*") Selects all elements
// 2. $("element") Selects all elements with the given tag name
// 3. $(".class-name") Selects all elements with the given class
// 4. $("#id") Selects a single element with the given id attribute

// All selector: Select all the elements from the page
$("*")

// Element selector: Select all the paragraphs
$("p")

// Class selector: Select all the elements with the class "main"
$(".main")

// Id selector: Select the element with the id "main-section"
$("#main-section")
// Child selector: Select all the paragraphs inside the body
$("body > p")

// Descendant selector: Select all the .selected-item elements from the .main-nav
$(".main-nav .selected-item")

// Next Adjacent selector: Select all the label inside a form
$("form + label")
// First selector: Select the first paragraph of the body
$("body p:first")

// Last selector: Select the last element in a nav section
$("nav ul li:last")

// Even selector: Select the even elements from a <ul> menu
$("#main-menu li:even")

// Not selector: Select all the paragraphs <p> without the class "nata"
$("p:not(.nata)")
// Contains selector: Select all the elements in the DOM that contain "nata"
$("*:contains('nata')");

// Has selector: Select all the elements in the DOM that have a paragraph <p>
$("*:has(p)");

//Visibility Filters
//Selects all elements that are hidden
//$(.selector:hidden);
//Selects all elements that are visible
//$(.selector:visible)
// Hidden selector: Select all the hidden elements in a <form>
$("form *:hidden");

// Visible selector: Select all the visible elements from a <ul> menu
$("ul#menu li:visible")

//Attribute Selectors
//The attribute selectors allow us to select DOM elements based on their attributes. 
//These selectors also return an array
// Has Attribute Selector: Select all the links <a> with an href
$("a[href]");

// Attribute Contains Word Selector: Select all the links <a> that contains
// "nata" in the href
$("a[href~='nata']");

//Child filters
// First Child Selector: Select the first element of a menu
$("#menu:first-child");

// Last Child Selector: Select the last element of a menu
$("#menu:last-child");

// Nth Child Selector: Select all the odd elements from a list
$("#list:nth-child(odd)");

//Forms
// Control Selectors: Select an input, a button, and an image element
$("form *:input");
$("form *:button");
$("form *:image");

// Enabled Selector: Select all the enabled controls in a form
$("form input:enabled");

//Attributes/CSS
//.example([param]);

<input type="text" value="test" id="test" />
console.log($("#test").attr("value")); // => test
console.log($("#test").prop("value")); // => test
// Value: Get the value of the first input inside a form
$("form .user-name").val();

// Property: Set the property Checked of a CheckBox with the class .checkbox
$(".checkbox").prop("checked", true);

$("p").removeClass("clicked moved");

//Toggle Class

//<button id="btn-send" class="disabled">
$("#btn-send").toggleClass("disabled");
// => <button id="btn-send" class="">

$("#btn-send").toggleClass("disabled");
// => <button id="btn-send" class="disabled">

if ($(".element").hasClass("visible")) {
    $(".element").removeClass("visible");
} else {
    $(".element").addClass("visible");
}
$(".element").toggleClass("visible");

// Change the text color of an element if it's parent has the class .disabled
if ($(".parent").hasClass("disabled")) {
    $(".parent .element").addClass("white-color");
  }
  
  // Remove all the classes from all the elements of the website
  $("*").removeClass();

  //Dimensions(Height&Width)
  // Get the HTML document width
$(document).width();

// Remove the width from all the elements in a website
$("*").width(0);




  














