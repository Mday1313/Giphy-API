$(document).ready(function () {



    // create array of strings for topic of interest
    var awesomeStuff = ["Time Travel", "Aurora Borealis", "Sports Fans", "Pop Art", "Space Pizzas", "Laughter", "Flying Machines", "Bucket Hats", "Space", "Carnivorous Plants", "Line Dancing", "Miniature Poodles"];

    var numberLimit;
    console.log(numberLimit);
    

    // set up function that will obtain 10 gifs for the button pushed

    function displayAwesomeGif() {
        //  pass in the data collected from click, save to variable
        var button = $(this).attr("data-name");
        numberLimit = $("#display-count").val();
        // save api link with key to variable, add in data variable from above, limit the number of responses to 10
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + button + "&api_key=RstkIHHPOpk4OYsoQS7IfCXzczsswL78&limit=" + numberLimit + "&offset=+10";
       
        // var queryURL = gif;
        // console.log(mediaType);
        console.log(numberLimit);
        // AJAX call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $("#giphy-view").empty();
            var results = response.data;

            // loop through response data array to pull out image and rating for each gif

            for (var i = 0; i < results.length; i++) {

                // Container (div) for each gif to sit inside
                var resultDiv = $("<div>");
                resultDiv.addClass("gifDiv");
                // Get title (Removed because they are too long and messy )
                // var titleText = $("<p>").html(results[i].title);
                // resultDiv.append(titleText);

                // Create image tag
                var image = $("<img>");
                // add image data for both still and animated
                image.attr("src", results[i].images.fixed_height_small_still.url);
                image.attr("data-still", results[i].images.fixed_height_small_still.url);
                image.attr("data-animate", results[i].images.fixed_height.url);

                // set the data state to still
                image.attr("data-state", "still");
                image.addClass("image");
                resultDiv.append(image);
                // Get rating information
                var ratingText = $("<p>").html("Rated: " + results[i].rating);
                // Append rating to container
                resultDiv.append(ratingText);

                // insert image and rating to webpage
                $("#giphy-view").prepend(resultDiv);



            }




        });




    }

    // function to create the buttons from each string in the array
    function generateButtons() {

        // clear out button
        $("#buttons-view").empty();

        // run for loop or forEach to generate button for each item in array
        for (var i = 0; i < awesomeStuff.length; i++) {
            // create button tag in html, add class and data attribute
            // then append
            var buttons = $("<button>");

            buttons.addClass("awesome-btn btn-sm");
            buttons.addClass("btn btn-dark");

            buttons.attr("data-name", awesomeStuff[i]);

            buttons.text(awesomeStuff[i]);

            $("#buttons-view").prepend(buttons);

            $("#button-input").val("");
           
        }
        
    }


    // create on click function to push the userinput to the awesomeStuff list
    $("#add-button").on("click", function (event) {
        event.preventDefault();
        // store user input
        var newAwe = $("#button-input").val().trim();

        //    push to array

        //  FIGURE OUT WAY TO NOT LET WORDS REPEAT
        awesomeStuff.push(newAwe);





        generateButtons();

    });
    generateButtons();


    

    






// connect button to display 10 static non animated images from topic with their rating

    $(document).on("click", ".awesome-btn", displayAwesomeGif);

    // when image is clicked animate, on second click stop animation (ask if on hover instead)
    $(document).on("click", ".image", function () {
        var state = $(this).attr('data-state');
        if (state == "still") {

            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    });



});