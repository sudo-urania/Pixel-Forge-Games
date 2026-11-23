"use strict";

/*    Final Exam 2
      Gaming Company Website

      Author: Sarah Imhoff
      Date: 11/16/2026

      Filename: infosquare.js
*/

// Set the size of each moving square
const SQUARE_SIZE = 50;

// Set the width of the container
const BOX_WIDTH = 700;

// Set the height of the container
const BOX_HEIGHT = 200;

// Set the maximum number of squares allowed
const MAX_SQUARES = 15;

// Store the current number of squares
let squareCount = 0;

// Create an object that represents the container
let box = {
   width: BOX_WIDTH,
   height: BOX_HEIGHT
};

// Constructor function for each moving square
function GameSquare(size) {

   // Store the size of the square
   this.size = size;

   // Store the horizontal position
   this.xPos = 0;

   // Store the vertical position
   this.yPos = 0;

   // Store the horizontal velocity
   this.xVelocity = 0;

   // Store the vertical velocity
   this.yVelocity = 0;
}

// Move the square within the container
GameSquare.prototype.moveWithin = function(container) {

   // Calculate the current square boundaries
   let squareTop = this.yPos;
   let squareLeft = this.xPos;
   let squareBottom = this.yPos + this.size;
   let squareRight = this.xPos + this.size;

   // Reverse vertical direction if the square hits the top or bottom
   if (squareTop < 0 || squareBottom > container.height) {
      this.yVelocity = -this.yVelocity;
   }

   // Reverse horizontal direction if the square hits the left or right side
   if (squareLeft < 0 || squareRight > container.width) {
      this.xVelocity = -this.xVelocity;
   }

   // Move the square vertically
   this.yPos += this.yVelocity;

   // Move the square horizontally
   this.xPos += this.xVelocity;
};

// Store a reference to the container box
let squareBox = document.getElementById("squareBox");

// Store a reference to the Add Game Square button
let addSquare = document.getElementById("addSquare");

// Run this function when the button is clicked
addSquare.onclick = function() {

   // Only add another square if fewer than 15 exist
   if (squareCount < MAX_SQUARES) {

      // Create a new div element for the square
      let squareImage = document.createElement("div");

      // Give the new div the gameSquare class
      squareImage.className = "gameSquare";

      // Display the word Game inside the square
      squareImage.textContent = "Game";

      // Add the square to the container
      squareBox.appendChild(squareImage);

      // Create a new GameSquare object
      let newSquare = new GameSquare(SQUARE_SIZE);

      // Start the square near the center of the container
      newSquare.xPos = (BOX_WIDTH - SQUARE_SIZE) / 2;

      // Start the square near the center vertically
      newSquare.yPos = (BOX_HEIGHT - SQUARE_SIZE) / 2;

      // Give the square a random horizontal velocity
      newSquare.xVelocity = rand(-5, 5);

      // Give the square a random vertical velocity
      newSquare.yVelocity = rand(-5, 5);

      // Increase the square count
      squareCount++;

      // Continuously move the square
      window.setInterval(function() {

         // Update the square's position
         newSquare.moveWithin(box);

         // Move the square image horizontally
         squareImage.style.left = newSquare.xPos + "px";

         // Move the square image vertically
         squareImage.style.top = newSquare.yPos + "px";

      }, 30);
   }
};

// Return a random whole number between min and max
function rand(min, max) {

   // Generate and return the random number
   return Math.floor(Math.random() * (max - min + 1)) + min;
}