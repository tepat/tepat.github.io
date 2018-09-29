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
$('#author').addClass('hide');


document.onkeydown = function(event) {
    var x = event.keyCode;
    if(x == 13){ //enter
        $('#quotes').html(quotes[currentQuote]);
        $('#author').removeClass('hide');
    } else if(x == 8){ //del
        $('#quotes').addClass('animated flipInX');
        $('#quotes').html("Type anything here ...");
        currentQuote = Math.floor(Math.random()*quotes.length);
        $('#author').addClass('hide');
    } else {  //any keys
        $('#quotes').removeClass('animated flipInX');
        if($('#quotes').html() == "Type anything here ..."){
            $('#quotes').html("");
        }
        let currentPos = document.getElementById("quotes").innerHTML.length;
        console.log(currentPos);
        console.log(currentQuote)
        document.getElementById("quotes").innerHTML += quotes[currentQuote].substr(currentPos,1);
        if(currentPos>=quotes[currentQuote].length-1){
            $('#author').removeClass('hide');
        }
    }
}