var heading = document.querySelector("h1");
var dice1_img = document.querySelector("#dice-1 img");
var dice2_img = document.querySelector("#dice-2 img");

// Generate a random number between 2.5 and 10.75, including both 2.5 and 10.75
// https://www.udacity.com/blog/2021/04/javascript-random-numbers.html#:~:text=Generating%20Javascript%20Random%20Numbers,it%20will%20never%20be%201.
function generateRandomFloatInRange(min, max, places) {
     var val1 = (Math.random() * (max - min + 1)) + min;
     return Number.parseFloat(val1).toFixed(places)
}

function informWinner(player1, player2) {
    if (player1 == player2) {
        return set_heading_text("It's a draw!")
    }
    else if (player1 > player2) {
        return set_heading_text("Player 1 wins!")
    }
    else {
        return set_heading_text("Player 2 wins!")
    }
}

function set_heading_text(text) {
    heading.textContent = text
}
function display_dices(player1, player2) {
    
}
var player1 = generateRandomFloatInRange(1,5,0);
var player2 = generateRandomFloatInRange(1,5,0);
// document.getElementById("dice-1 img").setAttribute("src","images/dice1.png")
dice1_img.setAttribute("src","images/dice"+player1+".png")
dice2_img.setAttribute("src","images/dice"+player2+".png")

informWinner(player1,player2)
