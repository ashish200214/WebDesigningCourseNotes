
//append() : append() method is used to append the  element at last of the selected element.
$(document).ready(()=>{
    $('#btn1').click(()=>{
        $('#div1').append("<b>Text Appended.</b>")
    })

    //The jQuery prepend() method inserts content AT THE BEGINNING of the selected HTML elements.
    $('#btn2').click(()=>{
        $('#div1').prepend("<b>Text Prepended.</b>")
    })
    //before() -> used to insert the element at beginning of the selected element.
    //after () -> used to inser the element at the end of the selected element.

    //remove() -> method is used to remove the element.
    //empty() -> method is used to remove the child element present inside the main element.

    //     The jQuery remove() method also accepts one parameter, which allows you to filter the elements to be removed.

    // The parameter can be any of the jQuery selector syntaxes.
    //  $("p").remove(".test"); 

    // CSS
    //day night implementation of the button.
    // addClass() - Adds one or more classes to the selected elements
    // removeClass() - Removes one or more classes from the selected elements
    // toggleClass() - Toggles between adding/removing classes from the selected elements.
    // css() -> These method id used to set the css property.
    //syntax : $(selector).css('property','value')
    //  $("p").css("background-color", "yellow"); 
    $('#day-night').click(()=>{
        $(document.body).toggleClass("nightMode")
    })
})