// make a document.ready function

$("document").ready(function(){

    $()

    // declare my variables.
    let timeLeft = 5;
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    // setting countdown interval
    let interval = setInterval(countdown, 1000);

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



})