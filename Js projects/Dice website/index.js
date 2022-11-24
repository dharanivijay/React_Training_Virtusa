var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImage = "dice"+randomNumber1+".png";
var randomImageSource = "./images/"+randomImage;
var imageran1 = document.querySelectorAll("img")[0];
imageran1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImage = "dice"+randomNumber2+".png";
var randomImageSource = "./images/"+randomImage;
var imageran2 = document.querySelectorAll("img")[1];
imageran2.setAttribute("src",randomImageSource);

function winner(){
    if(randomNumber1 > randomNumber2)
    {
        document.querySelector("h1").innerHTML =("Player 1 wins");
    }
    else if(randomNumber1 < randomNumber2)
    {
        document.querySelector("h1").innerHTML =("player 2 wins");
    }
    else{
        document.querySelector("h1").innerHTML =("Draw! repeat it again");
    }
}

winner();