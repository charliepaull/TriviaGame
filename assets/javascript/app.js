/* Overall idea: 
    Click the "Start" button to begin the game and trigger the time countdown.
        make sure to call the countdown function to begin the timer.
    Time decreases from 60 seconds down to 0.
    
    When "Start" button is clicked:
        1. trigger a for loop
        2. dynamically create paragraph tags
        3. give p tags a class
        4. give p tags an attr
        5. push "question" content into p tag using .notation from the object
        6. use .text to display on the browser.
    
    During Countdown:
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
    // Goal: Declare variables.

    // Declare var timeLeft & give it the value of 60 seconds.
    var timeLeft = 5; //5 seconds is for a test.
    // Declare var correct & start it at 0;
    var correct = 0;
    // Declare var incorrect & start it at 0;
    var incorrect = 0;
    // Declare var unanswered & start it at 0;
    var unanswered = 0;
    //Declare var interval & use setInterval method with parameters countdown, 1000)
    // setInterval calls a function or evaluates expression at specified intervals.
    var interval = setInterval(countdown, 1000);

    // Goal: Create object nested inside array with questions & answers using key: value
// answer options will be in an array, can be called based off index
// Declare variable and set it equal to an array
    var trivia = [{
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

    ];



    // Initial: Browser loads with Start button on page
    // Everything else (Trivia Header, Secs Remain, scoreboard, retry button) hidden. 
    // User clicks on Start Button to begin game.
    // Select the class .header-container & use a method to hide it 
    
    $("#try-again").hide();
    $(".q-content").hide();
    $("#option-content").hide();
    //Select button element, use click method & declare a callback function named clickStart
    //     $("button").click(function() {
    //         $("#button").hide();
    //         $(".header-container").show();
    //         $(".q-content").show();
    // });

    // Goal: Begin time countdown
    // create a function & name is countdown
    function gameContent() {
        // Create on-click function, triggered when "Start" is clicked (#start-button)
        document.querySelector("#start-button") = function () {
        // show Totally Trivial Trivia! & Seconds Remaining header
        document.querySelector(".header-container").style.visibility = "hidden";
        // **use timeLeft variable for seconds remaining
        // $("#seconds-remain").html("Seconds Remaining: " + timeLeft);

        // Goal: dynamically enter the questions & options to the page.
        // Create for loop to create each question & option tags within a div (append to div at end)
        for (var i = 0; i < trivia.length; i++){
        // Declare a var qBlock & set it to a div
        var block = $("div"); //document.creatElement - JS method
        // give qBlock a class
        document.querySelector(block).className = "q-options"; 
        // Make a p tag to hold question (iterate through each value within object)
        var p = document.creatElement("p");
        // add class to question p tag
        document.getElementById("p").className = "question";
        // create content to append
        var question = document.createTextNode(trivia[i].options);
        // add question to p tag (using .appendChild)
        p.appendChild(question);

        // Make a p tag to hold options (iterate through each value within object)
        var p = document.creatElement("p");
        // add class to options p tag
        document.getElementById("p").className = "options";
        // create content to append
        var options = document.createTextNode(trivia[i].options);
        // add options to p tag (using .appendChild)
        p.appendChild(options);

        gameContent();



        // set IF timeLeft equal to zero
        if (timeLeft === 0){
        // clearTimeout (built in method) timerId to end timer at zero.
            clearTimeout(interval);
        // inject html dynamically that says "Time is Up!"
            $("#time-end").html("Your Time is Up!");
        // inject html dynamically telling user # of correct answers
            $("#right").html("Correct Answers: " + correct);
        // inject html dynamically telling user # of incorrect answers
            $("#wrong").html("Incorrect Answers: " + incorrect);
        // inject html dynamically telling user # of unanswered questions
            $("#unanswered").html("Unanswered Questions: " + unanswered);
        // Show button that gives user chance to try again
            $("#try-again").show();
        // If timeRemain !== 0 (**else statement**)
            $(".q-content").hide();
        } else {
        // inject html dynamically telling user time remaining
        // decrease time left by 1
            timeLeft--;
        }
        // });
    }

    

    


//Goal: dynamically insert each trivia question, with options
// I want to dynamically put each question in html text on my page through a for loop
// that goes through my array of objects.
// Let's make a for loop and add each question to the browser 
    // set a for loop and make i < trivia.length, iterate i++
    function triviaDisplay(){
    for (i = 0; i < choiceArr.length; i++){
            const choiceArr = trivia[i].options;
            $(".q-content").append("<h4>" + trivia[i].q + "<h4>"); 
            // $(".q-content").append("<p>" + trivia[i].options + "<p>");
        var b = $("<button>");
        // Adding a class of movie-btn to our button
        console.log(choiceArr[i]);
        b.addClass("choices");
        // Adding a data-attribute
        b.attr("data-name", trivia[i].options);
        // Providing the initial button text
        $("#option-content").append(trivia[i].options);

        console.log(trivia[i].q);
        console.log(trivia[i].options);
        console.log(trivia[i].a);
    }};
    triviaDisplay();

});

