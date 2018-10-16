/* Overall idea: 
    Start button to begin the game and trigger the time countdown.
    App has 6 questions.
    Entire quiz will last for 1 min.
    4 answer choices for each.
        User will only be able to choose ONE answer.
        Presses submit and page reloads.
        Answer revealed after user presses submit.
            **probably dynamically inserted**
            Correctly Answered: 
            Incorrectly Answered: 
            Unanswered Questions: 
*/

// Goal: Declare necessary variables.
// Declare var secondRemain & set to 0.
var secondsRemain = 0;
// Declare var clockRunning & set to false.
var clockRunning = false;

// Create a function declaration & name it startCount
function startCount(){
// Use setInterval to start Count    
}

// Goal: Everything except Start Button hidden. User clicks on Start Button to begin game.
// Select the header div & create callback function that selects class ".header-container" & hide the content.
$("div").ready(function hideHeader(){
    $(".header-container").hide();
// Select the button element & create callback function to click the "Start" button.
    $("button").click(function clickStart() {
    // select ID associated with the button & hide button.
        $("#button").hide();
        $(".header-container").show();

    });
        
});