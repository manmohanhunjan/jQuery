$(document).ready(function(){
    //Modify the text content of the h1 element
    $('#title').text("Hello, jQuery!"); 

    //Modify the CSS color property of paragraph element
    $('#paragraph').css('color', 'blue');

    //Add class to button element
    $('#button').addClass('highlight');

    //Get value of the button element ID and display it in the console
    var buttonId = $('#button').attr('id');
    console.log(buttonId + " is the button ID");

    //Insert new paragraph element after the button element
    $('#button').after('<p id="new-paragraph">This is a new paragraph</p>');
    // $('#button').after('<p id="new-paragraph">This is a new paragraph.</p>');

    
    //Bind a click event to the button element
    $('#button').on("click", function(){
        //Modify the text content of newly created paragraph element
        $('#new-paragraph').text('Button clicked!')
    });
});

// Path: BonusExercise/b3.js
