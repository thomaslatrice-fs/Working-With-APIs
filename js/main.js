"use strict"

//IIFE with arrow function runs code immediately
(()=>{
    //selects paragraph element where the joke will be displayed
    const jokeText = document.querySelector("#jokeText");
    //selects button element the user will click for new joke
    const btn = document.querySelector("#btn");
    //arrow function requests jokes from API
    const getJoke = () => {
        //requests data from joke API
        fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart")
        //converts response when received from JSON format    
        .then((response) => {
                return response.json(); 
            })
            //after JSON is ready access the joke
            .then((data) => {
                //store joke setup in a varible
                const setup = data.setup;
                //store punchline in varible
                const delivery = data.delivery;
                //display full joke on webpage
                jokeText.textContent = setup + " ... " + delivery;
            })
            //displays error message if something goes wrong
            .catch((error) => {
                //show message if joke doesn't load
                jokeText.textContent = "Jokes on you, something went wrong. Please try again";
                console.log(error);//log error in console
            });
    };
    //event to listen so new joke loads
    btn.addEventListener("click", () => {
        getJoke();
    });
    //call function so joke loads automatically when page loads
    getJoke();
})();