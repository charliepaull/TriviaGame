// make a document.ready function

$("document").ready(function(){

    // hide some stuff first - done in CSS 
    // will show after on-click start

    // onclick to start trivia game
    // startFunction = () => {
    //     console.log("hello!");
    $("#start-button").on("click", function(){
        console.log("hi there!"); //works 
        // show trivia-container
        $(".trivia-container").show();
        // hide start container
        $(".start-container").hide();
        // show timer
        timer = setInterval(gameTime.countdown, 1000);



        // append questions to .question-container div
        for (var i = 0; i < trivia.length; i++) {
            $(".question-container").append('<h2>' + trivia[i].q + '</h2>');
            for (var j = 0; j < trivia[i].options.length; j++){
              $(".question-container").append("<input type='radio' name='rad-answer-" + i + "' value='" + trivia[i].options[j] + "'/>","<label>" + trivia[i].options[j] + "</label>");
            }
            }
            $(".question-container").append("<br><button type='button' class='btn btn-light' id='submit'>Submit Your Answers!</button>");

    })	
    
    
    // submit on-click function
    $(".question-container").on("click", "#submit", function(){
        resultFunction();
    })

    // restart game button
    $("#try-again").on("click", function(){
        
    })

    resultFunction = () => {
        console.log("do I fire?"); // this fires!
        // clear and stop timer
        clearInterval(timer);
        // hide questions
        $(".trivia-container").hide();
        // show results
        $(".results-container").show();

        // logic for correct/incorrect/unanswered qs
        gameTime.logic();

        // show user stats
        $("#time-end").show();
        $("#right").text("Correct Answers: " + gameTime.correct);
        $("#wrong").text("Incorrect Answers: " + gameTime.incorrect);
        $("#unanswered").text("Unanswered Questions: " + gameTime.unanswered);

    }
    // timer interval
    var timer; 

    // declare my variables within an object
    let gameTime = {
        timeLeft: 100,
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        countdown: function () {
            console.log("do you see me?"); //yes I see you
            // show timer
            $("#time").text("Time Remaining: " + gameTime.timeLeft + " Seconds");
            // counting down
            gameTime.timeLeft--;
            // set up time interval
            if (gameTime.timeLeft === 0) {
                console.log("time is up!");
                this.resultFunction();
            }
        },
        logic: function() {
            // GOAL: checking if answer is true
            // loop through array of objects
            for (var i = 0; i < trivia.length; i++){
                // find the answer (trivia[i].a)
                // create variable to capture value

                // capture value of user answer
                var userAns = $("input[name=rad-answer-"+i+"]:checked").val();
                console.log(userAns) //this captures
                

                var ans;
                // capture answer, push into ans
                ans = trivia[i].a;
                // does this value capture?
                console.log(ans); // yes this captures!
                // logic, is user answer = a? 

                // unanswered questions
                if (userAns === undefined){
                    console.log("nothing here!"); // this works
                    gameTime.unanswered++;

                    // correct answer
                } else if (ans === userAns) {
                    console.log(true); //this works
                    gameTime.correct++;
                
                // incorrect answer
                } else {
                    console.log(false);
                    gameTime.incorrect++;
                }
            }
        }
    }

    // trivia questions - array of objects
    var trivia = [{
        q: "Who's on first?",
        options: ["What", "Who", "I Dont Know"],
        a: "Who"
    },
    {
        q: "What's on second?",
        options: ["Who", "Why", "What"],
        a: "What"
    },
    {
        q: "I Dont Know, who's on third?",
        options: ["I Dont Know", "Who", "Because"],
        a: "I Dont Know"
    },
    {
        q: "If the catcher is 'Today', the Shortshop is ''I Dont Give A Darn'', the pitcher is 'Tomorrow', and the second baseman is 'What', what's the sequence if the catcher throws to the shortstop?",
        options: ["Today - What", "Tomorrow - I Dont Give A Darn", "Today - I Dont Give A Darn", "I Dont Give A Darn - What"],
        a: "Today - I Dont Give A Darn",
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

})
