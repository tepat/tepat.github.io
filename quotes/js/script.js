var quotes = [  "Having guts always works out for me!",
                "You can’t use up creativity the more you use the more you have.",
                "Art, indeed, began with abstraction.",
                "The Earth without art is just eh.",
                "It’s through mistakes that you actually grow. You have to get bad in order to get good.",
                "Inspiration exists, but it has to find you working.",
                "You are not a drop in the ocean, you are the ocean in a drop.",
                "Think eight hours, work two hours.",
                "There are three responses to a piece of design: yes, no and wow!",
                "I will be an artist or nothing.",
                "There is only one of you in all time. This expression is unique and if you block it, it will never exist through any other medium and it will be lost.",
                "But, if you have nothing at all to create, then perhaps you create yourself."
            ];

let rand = Math.random();
var currentQuote = Math.floor(rand*quotes.length);
document.getElementById("author").classList.add("hide");


document.onkeydown = function(event) {
    var x = event.keyCode;
    if(x == 13){
        document.getElementById("quotes").innerHTML = quotes[currentQuote];
        document.getElementById("author").classList.remove("hide");
    } else if(x == 8){
        document.getElementById("quotes").innerHTML = "Type anything here";
        currentQuote = Math.floor(Math.random()*quotes.length);
        document.getElementById("author").classList.add("hide");
    } else if(x != 13){
        if(document.getElementById("quotes").innerHTML == "Type anything here"){
            document.getElementById("quotes").innerHTML = "";
        }
        let currentPos = document.getElementById("quotes").innerHTML.length;
        console.log(currentPos);
        console.log(currentQuote)
        document.getElementById("quotes").innerHTML += quotes[currentQuote].substr(currentPos,1);
        if(currentPos>=quotes[currentQuote].length-1){
            document.getElementById("author").classList.remove("hide");
        }
    }
}