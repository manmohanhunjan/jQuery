$(document).ready(()=>{
    $("a").click(function(event){ 
        //why isn't arrow function working here? 
        //because arrow function doesn't have its own this
        //so it will take the this of the parent function
        //which is the document.ready function
        //and document.ready doesn't have a this
        event.preventDefault();
        $(this).hide("slow");
    });
})

