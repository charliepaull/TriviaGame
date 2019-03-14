// make a document.ready function

$("document").ready(function(){

    // hide some stuff first - done in CSS 
    // will show after on-click start

    // onclick to start trivia game
    // startFunction = () => {
    //     console.log("hello!");
    $("#start-button").on("click", function(){
        console.log("hi there!"); //works 
        // show timer
        $("#time").text("Time Remaining: " +  gameTime.timeLeft);
        // show trivia-container
        $(".trivia-container").show();
        // hide start container
        $(".start-container").hide();
        // start timer
        setInterval(gameTime.timeLeft);

        // append questions to .question-container div
        for (var i = 0; i < trivia.length; i++) {
            $(".question-container").append('<h2>' + trivia[i].q + '</h2>');
            for (var j = 0; j < trivia[i].options.length; j++){
              $(".question-container").append("<input type='radio' name='rad-answer' id='question" + i + "' value='" + trivia[i].options[j] + "'>","<label>" + trivia[i].options[j] + "</label>");
            }
            }
            $(".question-container").append("<br><button type='button' class='btn btn-light' id='submit'>Submit Your Answers!</button>");

    })
    // }

    resultFunction = () => {
        // hide questions
        $(".trivia-container").hide();
        // show results
        $(".results-container").show();

        // show user stats
        $("#time-end").show();
        $("#right").text(gameTime.correct);
        $("#wrong").text(gameTime.incorrect);
        $("#unanswered").text(gameTime.unasnwered);
    }

    // declare my variables within an object

    let gameTime = {
        timeLeft: 5,
        correct: 0,
        incorrect: 0,
        unanswered: 0,
    }

    setInterval(function(){
        gameTime.timeLeft--;
        if (gameTime.timeLeft === 0){
            // this.resultFunction();
        }
    }, 1000);
    // setting countdown interval
    // let interval = setInterval(countdown, 1000);

    // trivia questions - array of objects
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

]

// startFunction();

})