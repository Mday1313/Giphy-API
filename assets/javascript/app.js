

$(document).ready(function () {
    


// create array of strings for topic of interest
var awesomeStuff = ["Volcano", "Aurora Borealis", "Deep Ocean", "Storms", "Ancient architecture", "Hot Air Balloons", "Flying Machines", "Poetry", "Sunsets", "Jellyfish"];


// set up function that will obtain 10 gifs for the button pushed

function displayAwesomeStuff() {
//  pass in the data collected from click, save to variable
    var button = $(this).attr("data-name");
// save api link with key to variable, add in data variable from above, limit the number of responses to 10
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + button + "&api_key=RstkIHHPOpk4OYsoQS7IfCXzczsswL78&limit=10";
// AJAX call
    $.ajax({
       url: queryURL,
       method: "GET"
    }).then(function(response) {
        console.log(response);

        var resultDiv = $("<div class='awesome'>");
// loop through response data array to pull out image and rating for each gif
        for (var i = 0; i < response.data.length; i++) {

            var imageURL = response.data[i].images.fixed_height_still.url;
            var image = $("<img>").attr("src", imageURL);
           
            resultDiv.append(image);

            var rating = response.data[i].rating;
            var ratingText = $("<p>").text("Rated: " + rating);
            resultDiv.append(ratingText);

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

        buttons.addClass("awesome-btn");
        buttons.addClass("btn btn-dark");

        buttons.attr("data-name", awesomeStuff[i]);

        buttons.text(awesomeStuff[i]);

        $("#buttons-view").append(buttons);



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

// when image is clicked animate, on second click stop animation (ask if on hover instead)








$(document).on("click", ".awesome-btn", displayAwesomeStuff);






});