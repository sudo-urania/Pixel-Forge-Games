"use strict";

/*    Final Exam 2
      Gaming Company Website

      Author: Sarah Imhoff
      Date: 11/16/2026

      Filename: purchasegames.js
*/

//store a reference to the Add to Cart button
let submitButton = document.getElementById("submitButton");
//store a reference to the View Cart button
let viewCart = document.getElementById("viewCart");
//store a reference to the game selection list
let game = document.getElementById("game");
//store a reference to the quantity selection list
let quantity = document.getElementById("quantity");

// Run this function when the Add to Cart button is clicked
submitButton.onclick = function() {

   // Declare a variable to store the total number of cart items
   let itemTotal;

   // Check whether itemsInCart already exists in session storage
   if (sessionStorage.getItem("itemsInCart")) {

      // Retrieve the current number of cart items and add one
      itemTotal = parseInt(sessionStorage.getItem("itemsInCart")) + 1;

   } else {

      // Set the cart item count to one if the cart is empty
      itemTotal = 1;
   }

   // Store the updated number of cart items
   sessionStorage.setItem("itemsInCart", itemTotal);

   // Create a text string containing the selected game's information
   let itemText = game.value + " & ";

   // Add the selected quantity
   itemText += quantity.value;

   // Store the game in session storage
   sessionStorage.setItem("cartItem" + itemTotal, itemText);

   // Tell the user the game was added
   alert("Game added to cart.");
}

// Run this function when View Cart is clicked
viewCart.onclick = function() {

   // Open the games cart page
   window.location.href = "gamescart.html";
}