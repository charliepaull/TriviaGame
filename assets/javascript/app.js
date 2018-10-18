/* Overall idea: 
    Start button to begin the game and trigger the time countdown.
    App has 6 questions.
    Entire quiz will last for 1 min.
    4 answer choices for each.
        User will only be able to choose ONE answer.
        Presses submit and page reloads.
        Answers revealed after user presses submit.
            **probably dynamically inserted**
            Correctly Answered: 
            Incorrectly Answered: 
            Unanswered Questions: 
            Take Quiz Again
*/


// Select document and use the .ready() method to run JS code after a page loads
$(document).ready(function(){
    // Goal: Declare necessary variables.
    // Declare var clockRunning & set to false.
    var clockRunning = false;
    // Declare an intervalId variable
    var intervalId;

    // Goal: Everything except Start Button hidden. User clicks on Start Button to begin game.
    /* Select the class .header-container & use a method to hide it 
    (use ("fast") as parameter)*/
    $(".header-container").hide("fast");
    /*Selected button element & use click method & create 
    a declare a callback function named clickStart*/
        $("button").click(function clickStart() {
            $("#button").hide(0);
            $(".header-container").show();
    });

    // Goal: Begin time countdown
    // Declare a countdown variable & make it an object
    var stopwatch = {
        // set key of time equal to the value of 60 seconds
        time: 60,
    // Create an start function
    start: function() {
        /*Select ID #seconds-remain & replace it's text dynamically
        add: "Seconds Remaining: " + 60   into tag. */
        $("#seconds-remain").text("Seconds Remaining: " + 60);
        // Declare an IF statement using (!clockRunning)
        if (!clockRunning) {
        // mutate setInterval to var interval.Id() & start count, pace by 1 second
            intervalId = setInterval(stopwatch.count, 1000);
            // set clock to start running
            clockRunning = true;
            // decrease stopwatch.time total by 1
            stopwatch.time--;
       } 
    }
    }
//     function startCount(){
//         // Use setInterval to start Count

// Create a function declaration & name it startCount







});