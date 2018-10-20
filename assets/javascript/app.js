/* Overall idea: 
    Start button to begin the game and trigger the time countdown.
    App has 6 questions.
    Entire quiz will last for 1 min.
    Question & Answer nested in an object within an array
        Show all questions & options when trivia page loads
            loop through each answer & options
            Figure out how to click each option as an answer.
            submit button to finish quiz 
        For Answers: 
            if statement to check if answer matches user guess (if )
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
    // Declare var timeLeft & give it the value of 60 seconds.
    var timeLeft = 60;
    // Declare var correct & start it at 0;
    var correct = 0;
    // Declare var incorrect & start it at 0;
    var incorrect = 0;
    // Declare var unanswered & start it at 0;
    var unanswered = 0;
    /*Declare var interval & use setInterval method with
    parameters countdown, 1000)*/
    var interval = setInterval(countdown, 1000);


    // Goal: Everything except Start Button hidden. User clicks on Start Button to begin game.
    // Select the class .header-container & use a method to hide it 
    $(".header-container").hide();
    $("#try-again").hide();
    //Select button element, use click method & declare a callback function named clickStart
        $("button").click(function() {
            $("#button").hide();
            $(".header-container").show();
            $("#try-again").show();
    });

    // Goal: Begin time countdown
    // Declare a function & name it countdown
    function countdown() {
        // **use timeLeft variable for seconds remaining
        $("#seconds-remain").html("Seconds Remaining: " + timeLeft);
        // set IF timeLeft equal to zero
        if (timeLeft === 0){
        // clearTimeout (built in method) timerId to end timer at zero.
            clearTimeout(interval);
        // inject html dynamically that says "Time is Up!"
            $("#time-end").html("Your Time is Up!");
        // inject html dynamically telling user # of correct answers
            $("#q-right").html("Correct Answers: " + correct);
        // inject html dynamically telling user # of incorrect answers
            $("#q-wrong").html("Incorrect Answers: " + incorrect);
        // inject html dynamically telling user # of unanswered questions
            $("#q-unanswered").html("Unanswered Questions: " + unanswered);
        // Show button that gives user chance to try again
            $("#try-again").show();
        // If timeRemain !== 0 (**else statement**)
        } else {
        // inject html dynamically telling user time remaining
        // decrease time left by 1
            timeLeft--;
        }
        // });
    }

    countdown();

    


// Goal: Create object nested inside array with questions & answers using key: value
// answer options will be in an array, can be called based off index
// Declare variable and set it equal to an array
// create a
var trivia = [
    {
        q: "Who's on first?",
        options: ["What", "Who", "I don't know"],
        a: "Who",
    },
    {
        q: "What's on second?",
        options: ["Who", "Why", "What"],
        a: "What",
    },
    {
        q: "I Don't Know, who's on third?",
        options: ["I Don't Know", "Who", "Because"],
        a: "I Don't Know",
    },
    {
        q: "If the catcher is 'Today', the Shortshop is 'I Don't Give A Darn', the pitcher is 'Tomorrow', and the second baseman is 'What', what's the sequence if the catcher throws to the shortstop?",
        options: ["Today - What", "Tomorrow - I Don't Give A Darn", "Today - I Don't Give A Darn", "I Don't Give A Darn - What"],
        a: "Today - I Don't Give A Darn",
    },
    {
        q: "Who wrote this comedy sketch?",
        options: ["Pete & Repeat", "Steph & Kevin", "Jerry & George", "Abbott & Costello"],
        a: "Abbott & Costello", 
    },
    {
        q: "What year was this sketch written?",
        options: ["1940", "1984", "2000", "1938"],
        a: "1938", 
    }

]

//Goal: dynamically insert each trivia question, with options
// I want to dynamically put each question in html text on my page through a for loop
// that goes through my array of objects.
// Let's make a for loop and add each question to the browser 
    // set a for loop and make i < trivia.length, iterate i++
    for (i = 0; i < trivia.length; i++){
            $(".q-content").append("<h4>" + trivia[i].q + "<h4>"); 
            $(".q-content").append("<p>" + trivia[i].options + "<p>");
        // var b = $("<button>");
        //   // Adding a class of movie-btn to our button
        //   b.addClass("-btn");
        //   // Adding a data-attribute
        //   b.attr("data-name", trivia[i].options);
        //   // Providing the initial button text
        //   b.append(trivia[i].options);

        console.log(trivia[i].q);
        console.log(trivia[i].options);
        console.log(trivia[i].a);
    }


});

