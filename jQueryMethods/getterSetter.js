$(() => {
  //Get Content - text(), html(), and val()
  //text() - Sets or returns the text content of selected elements
  // html() - Sets or returns the content of selected elements (including HTML markup)
  // val() - Sets or returns the value of form fields

  $("#btn1").click(() => {
    console.log(`Text: ${$("#test").text()}`); //text() method returns the text content of the selected elements.
  });

  $("#btn2").click(() => {
    console.log(`HTML: ${$("#test").html()}`); //html() method returns the content (including the HTML markup) of the selected elements.
  });

    $("#btn3").click(() => {
    console.log(`Value: ${$("#test").val()}`); //val() method returns the value of the selected elements.
    });

    //Set Content - text(), html(), and val()

    $("#btn4").click(() => {
        $("#test1").text("Hello World!"); //text() method sets or returns the text content of the selected elements.
    }
    );

    $("#btn5").click(() => {
        $("#test2").html("<b>Hello World!</b>"); //html() method sets or returns the content (including the HTML markup) of the selected elements.
    }
    );

    $("#btn6").click(() => {
        $("#test3").val("Dolly Duck"); //val() method sets or returns the value of the selected elements.
    }
    );

    

});


