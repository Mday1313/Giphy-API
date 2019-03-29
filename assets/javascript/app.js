

$(document).ready(function () {
    


// create array of strings for topic of interest
var awesomeStuff = ["Volcano", "Aurora Borealis", "Deep Ocean", "Storms", "Ancient Ruins", "Hot Air Balloons"]


// set up function that will obtain 10 gifs for the button pushed

function displayAwesomeStuff() {
 
    var button = $(this).attr("data-name");

    var queryURL = "" + button + "";


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















});