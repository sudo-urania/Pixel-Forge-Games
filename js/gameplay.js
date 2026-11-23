"use strict";

/*    Final Exam 2
      Gaming Company Website

      Author: Sarah Imhoff
      Date: 11/16/2026

      Filename: gameplay.js
*/

// Create an array containing the four card suits
let suits = ["clubs", "diamonds", "hearts", "spades"];

// Create an array containing all card ranks
let ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

// Create an empty array to hold the deck
let deck = [];

// Store references to Player 1's card images
let player1Cards = document.querySelectorAll("#player1 img");

// Store references to Player 2's card images
let player2Cards = document.querySelectorAll("#player2 img");

// Store a reference to the Deal Cards button
let dealButton = document.getElementById("deal");

// Store a reference to the result area
let result = document.getElementById("result");

// Run this function when the Deal Cards button is clicked
dealButton.onclick = function() {

   // Create and shuffle a new deck
   newDeck();

   // Set Player 1's score to zero
   let player1Score = 0;

   // Set Player 2's score to zero
   let player2Score = 0;

   // Deal four cards to Player 1
   for (let i = 0; i < player1Cards.length; i++) {

      // Remove one card from the deck
      let card = deck.pop();

      // Display the image for the selected card
      player1Cards[i].src = "images/" + card.file;

      // Show the card after its image is assigned
      player1Cards[i].style.visibility = "visible";

      // Add the card value to Player 1's score
      player1Score += card.value;
   }

   // Deal four cards to Player 2
   for (let i = 0; i < player2Cards.length; i++) {

      // Remove one card from the deck
      let card = deck.pop();

      // Display the image for the selected card
      player2Cards[i].src = "images/" + card.file;

      // Show the card after its image is assigned
      player2Cards[i].style.visibility = "visible";

      // Add the card value to Player 2's score
      player2Score += card.value;
   }

   // Compare both player scores
   if (player1Score > player2Score) {

      // Display Player 1 as the winner
      result.textContent = "Player 1 Wins! " + player1Score + " to " + player2Score;

   } else if (player2Score > player1Score) {

      // Display Player 2 as the winner
      result.textContent = "Player 2 Wins! " + player2Score + " to " + player1Score;

   } else {

      // Display a tie if both players have the same score
      result.textContent = "Tie Game! Both players scored " + player1Score;
   }
}

// Create and shuffle a complete deck of cards
function newDeck() {

   // Clear the current deck
   deck = [];

   // Loop through each suit
   for (let suit of suits) {

      // Loop through each rank
      for (let rank of ranks) {

         // Create a variable to store the card value
         let value;

         // Give an Ace a value of 11
         if (rank === "ace") {

            value = 11;

         // Give Jack, Queen, and King a value of 10
         } else if (rank === "jack" || rank === "queen" || rank === "king") {

            value = 10;

         } else {

            // Convert number cards to their numeric value
            value = parseInt(rank);
         }

         // Add the card filename and value to the deck
         deck.push({
            file: rank + "_" + suit + ".png",
            value: value
         });
      }
   }

   // Shuffle the deck
   deck.sort(shuffle);
}

// Return a random value used to shuffle the deck
function shuffle(a, b) {

   // Randomize the order of the cards
   return 0.5 - Math.random();
}