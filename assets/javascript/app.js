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

// Goal: Declare necessary variables.
// Declare var secondRemain & set to 0.
var secondsRemain = 60;
// Declare var clockRunning & set to false.
var clockRunning = false;

// Create a function declaration & name it startCount
$(document).ready(function(){
    $(".header-container").hide("medium");
        $("button").click(function clickStart() {
            $("#button").hide();
            $(".header-container").show();
    });
});

// // // Goal: Everything except Start Button hidden. User clicks on Start Button to begin game.
// // // Select the header div & create a callback function that selects class ".header-container" & hides the content.
// // // Select the button element & create callback function to click the "Start" button.
// //     $("button").click(function clickStart() {
// //     // select ID associated with the button & hide button.
// //         $("#button").hide();
// //         $(".header-container").show();

//     function startCount(){
//         // Use setInterval to start Count