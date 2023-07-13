$(()=>{
    //target all paragraphs and change their text color to blue
    $('p').css('color', 'blue');

    //Target the second list item and add a class
    $('li:nth-child(2)').addClass('highlight');

    //Target the image and change its width
    $('img').css('width', '200px');

    // Target the nested paragraph inside the container div and change its background color
    $('#container p').css('background-color', 'pink')
})