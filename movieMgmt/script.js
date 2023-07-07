$(()=>{
    var count = 0;

    var movieArray = []

    $("#addMovieBtn").on("click", function () {
        var name = $("#movieName").val()

        var url = $("#movieImgUrl").val()

        var description = $("#movieDesc").val()

        var rating = $("#movieRating").val()


        var genre = $("#movieGenre").val()

        var releaseDate = $("#movieReleaseDate").val()


        // create object
        var movieObj = {
            name: name,
            description: description,
            rating: rating,
            genre: genre,
            releaseDate: releaseDate
        }

        movieArray.push(movieObj)

        $("#cardContainer").append(`<div class="row flex-grow-1 text-bg-dark shadow border border-2 rounded-3 border-dark d-flex p-3 mb-3">
        <div class="col-md-5 ">
            <img src="${url}"
                alt="" class="w-100 rounded-3">

        </div>
        <div class="col-md-7 d-flex flex-column justify-content-center overflow-hidden">
            <!-- movie title -->
            <h4>${name}</h4>
            <!-- movie description -->
            <p>${description}</p>
            <!-- movie rating -->
            <p>Rating: ${rating}</p>
            <!-- movie genre -->
            <p>Genre: ${genre}</p>
            <!-- movie release date -->
            <p>Release Date: ${releaseDate}</p>
            <!-- add to table -->
            <button class="btn btn-success" id="${count}">Add to Table</button>
            
        </div>
    </div>`)



        count++;
        // modal display none
        $("#movieInputForm").modal("hide")
        
        $("#addMovieForm")[0].reset()
    
    })

    $("#cardContainer").on("click", ".btn-success", function () {    
        var id = $(this).attr("id")
        alert("Movie added to table")
        var movieObj = movieArray[id]
        $("tbody").append(`<tr>
        <td>${count}</td>
        <td>${movieObj.name}</td>
        <td>${movieObj.rating}</td>
        <td>${movieObj.genre}</td>
        <td>${movieObj.releaseDate}</td>
    </tr>`)
    });


})