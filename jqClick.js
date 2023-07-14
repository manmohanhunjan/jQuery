// $(document).ready(()=>{
//     $("a").click((event)=> { 
//         alert("Thanks for visiting!");
//         event.preventDefault();
//     });
// })

// Or

/* 
? Shorthand for $(document).ready() */

function readyFn( jQuery ) {
    console.log("Hello World!")
}

$(readyFn)